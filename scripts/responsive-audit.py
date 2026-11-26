"""Read-only responsive audit. No form submissions or external navigation."""
import json, os, re, sys, time, urllib.request
from collections import deque
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree as ET
from playwright.sync_api import sync_playwright

BASE = os.environ.get("AUDIT_BASE", "http://127.0.0.1:3000").rstrip("/")
SITE = os.environ["AUDIT_SITE"]
MODE = os.environ.get("AUDIT_MODE", "local")
OUT = Path("responsive-results") / MODE
OUT.mkdir(parents=True, exist_ok=True)
excluded = []
routes = set()
linked_from = {}
templates = []
def include(path, source):
    path = urlparse(path).path.rstrip("/") or "/"
    if path.startswith(("/admin", "/api", "/_next", "/_global-error", "/_not-found")) or path == "/410":
        excluded.append({"path":path,"reason":"private, API or intentional gone page","source":source})
        return
    if re.search(r"\.(png|jpg|jpeg|webp|svg|pdf|xml|txt|ico|js|css|woff2?)$", path, re.I):
        return
    if path.startswith("/") and "[" not in path:
        routes.add(path)
for p in Path("app").rglob("page.*"):
    if p.suffix not in (".tsx",".ts",".jsx",".js"): continue
    parts = p.relative_to("app").parts[:-1]
    if any(x.startswith(("@","_")) for x in parts): continue
    path = "/" + "/".join(x for x in parts if not x.startswith("("))
    if "[" in path: templates.append(path)
    else: include(path,"source")
for p in Path("content/blog").glob("*.md*"):
    if p.stem.lower() != "readme": include("/blog/"+p.stem,"blog source")
manifest = Path(".next/prerender-manifest.json")
if manifest.exists():
    for path in json.loads(manifest.read_text()).get("routes",{}):
        include(path,"prerender manifest")
for i in range(60):
    try:
        urllib.request.urlopen(BASE,timeout=5).close()
        break
    except Exception:
        time.sleep(2)
else:
    sys.exit("Site not reachable")
try:
    tree=ET.fromstring(urllib.request.urlopen(BASE+"/sitemap.xml",timeout=15).read())
    for loc in tree.findall(".//{*}loc"):
        u=urlparse(loc.text or "")
        if u.hostname in (SITE,"www."+SITE,urlparse(BASE).hostname): include(u.path,"sitemap")
except Exception as exc:
    excluded.append({"path":"/sitemap.xml","reason":str(exc)})
profiles = [(str(w),w,900,False) for w in (320,390,768,1024,1366,1920,2560)]
profiles += [("phone-portrait",390,844,True),("phone-landscape",844,390,True),("tablet-portrait",768,1024,True),("tablet-landscape",1024,768,True),("200pct-reflow-1366",683,450,False),("200pct-reflow-1920",960,540,False)]
results=[]
discover_errors=[]
with sync_playwright() as p:
    browser=p.chromium.launch()
    ctx=browser.new_context(viewport={"width":1366,"height":900})
    page=ctx.new_page()
    visited=set()
    while routes-visited:
        if len(visited)>=600:
            discover_errors.append("Discovery limit reached: remaining routes not tested")
            break
        path=sorted(routes-visited)[0]; visited.add(path)
        try:
            res=page.goto(BASE+path,wait_until="domcontentloaded",timeout=20000)
            if res and res.status==200:
                for link in page.locator("a[href]").evaluate_all("(els)=>els.map(e=>e.href)"):
                    u=urlparse(link)
                    if u.hostname in (SITE,"www."+SITE,urlparse(BASE).hostname) and not u.query:
                        # Restrict link discovery to public page namespaces; never follow action endpoints.
                        if u.path.startswith(("/blog/","/cellphone/","/internet/","/en/")):
                            linked_from.setdefault(u.path.rstrip("/") or "/",set()).add(path)
                            include(u.path,"internal link")
        except Exception as exc:
            discover_errors.append({"path":path,"error":str(exc)})
    ctx.close()
    for name,w,h,touch in profiles:
        ctx=browser.new_context(viewport={"width":w,"height":h},has_touch=touch,is_mobile=touch)
        page=ctx.new_page()
        for path in sorted(routes):
            row={"path":path,"profile":name,"width":w,"height":h}
            try:
                res=page.goto(BASE+path,wait_until="domcontentloaded",timeout=25000)
                page.evaluate("document.fonts.ready")
                row.update(page.evaluate("""() => {
                  const root=document.documentElement;
                  const visible=e=>{const c=getComputedStyle(e),r=e.getBoundingClientRect();return e.getClientRects().length&&c.visibility!=='hidden'&&c.display!=='none'&&!(c.position==='absolute'&&r.width<=1&&r.height<=1);};
                  const rect=e=>e.getBoundingClientRect();
                  const scrollParent=e=>{for(let a=e.parentElement;a;a=a.parentElement){if(['auto','scroll'].includes(getComputedStyle(a).overflowX)&&a.scrollWidth>a.clientWidth)return a;}return null;};
                  const headings=[...document.querySelectorAll('h1,h2,h3')].filter(visible);
                  const contact=[...document.querySelectorAll('a,button')].filter(e=>visible(e)&&(/电话咨询|微信(?:在线)?咨询|中文客服|tel:/i.test((e.innerText||'')+' '+(e.getAttribute('href')||''))));
                  const ctas=contact.filter(e=>getComputedStyle(e).display!=='inline'||e.tagName==='BUTTON');
                  const fixed=[...document.querySelectorAll('body *')].filter(e=>visible(e)&&getComputedStyle(e).position==='fixed'&&rect(e).height>0);
                  return {viewport:innerWidth,documentWidth:root.scrollWidth,
                    headingOverflow:headings.filter(e=>e.scrollWidth>e.clientWidth+2&&!scrollParent(e)).map(e=>e.innerText.slice(0,100)),
                    inlineContactLinks:contact.filter(e=>!ctas.includes(e)).map(e=>e.innerText.slice(0,80)),
                    smallContactTargets:ctas.filter(e=>rect(e).width<44||rect(e).height<44).map(e=>({text:e.innerText.slice(0,80),w:Math.round(rect(e).width),h:Math.round(rect(e).height)})),
                    imageOverflow:[...document.images].filter(e=>visible(e)&&!scrollParent(e)&&(rect(e).right>innerWidth+2||rect(e).left<-2)).map(e=>e.getAttribute('src')),
                    tableOverflow:[...document.querySelectorAll('table')].filter(e=>visible(e)&&!scrollParent(e)&&(rect(e).right>innerWidth+2||rect(e).left<-2)).length,
                    fixedElements:fixed.map(e=>({tag:e.tagName,top:Math.round(rect(e).top),bottom:Math.round(rect(e).bottom),height:Math.round(rect(e).height)}))};
                }"""))
                row["http"]=res.status if res else 0
                row["finalPath"]=urlparse(page.url).path
                if row["http"]!=200: row["linkedFrom"]=sorted(linked_from.get(path, set()))
                # Only inspect safe UI controls; never submit or activate a telephone/external link.
                if name in ("phone-portrait","tablet-landscape","1366"):
                    page.keyboard.press("Tab")
                    row["keyboardFocus"]=page.evaluate("""() => {const e=document.activeElement;return e&&e!==document.body?{tag:e.tagName,visible:!!e.getClientRects().length}:null;}""")
                    trigger=page.get_by_role("button",name=re.compile("微信(?:在线)?咨询|微信客服|扫码咨询"))
                    if trigger.count() and trigger.first.is_visible():
                        trigger.first.click(timeout=3000)
                        dialog=page.locator('[role="dialog"], dialog[open], [aria-modal="true"]')
                        if dialog.count() and dialog.first.is_visible():
                            box=dialog.first.bounding_box()
                            row["dialogFits"]=bool(box and box["width"]<=w+2 and box["height"]<=h+2)
                            page.keyboard.press("Escape")
                            row["dialogEscapeClosed"]=not dialog.count() or not dialog.first.is_visible()
                        else: row["dialogStatus"]="No semantic dialog detected; manual check required"
                    else: row["dialogStatus"]="No matching visible button; not tested"
                row["intentionalRetirement"]=path in ["/cellphone/government"] and row["http"]==404 and not row.get("linkedFrom")
                row["pass"]=row["intentionalRetirement"] or row["http"]==200 and row["viewport"]==w and row["documentWidth"]<=w+2 and not row["headingOverflow"] and not row["smallContactTargets"] and not row["imageOverflow"] and row["tableOverflow"]==0 and row.get("dialogFits",True) and row.get("dialogEscapeClosed",True)
                if not row["pass"]:
                    safe=re.sub(r"[^a-zA-Z0-9_-]","_",path)[:120]
                    if len(list(OUT.glob("*.png")))<120: page.screenshot(path=str(OUT/f"{name}-{safe}.png"),timeout=5000)
            except Exception as exc:
                row.update({"pass":False,"error":str(exc)})
            results.append(row)
            print(json.dumps(row,ensure_ascii=False),flush=True)
        ctx.close()
    browser.close()
summary={"mode":MODE,"base":BASE,"routes":len(routes),"profiles":len(profiles),"checks":len(results),"retiredChecks":sum(r.get("intentionalRetirement",False) for r in results),"passed":sum(r["pass"] for r in results),"failed":sum(not r["pass"] for r in results),"dynamicTemplates":templates,"excluded":excluded,"discoveryErrors":discover_errors,"limitations":["200% reflow is half CSS viewport, not native browser zoom","Chromium only; actual hardware and Safari/Firefox not tested","Keyboard focus and semantic dialog checks are partial; visual overlap and fixed-bar obstruction require review","Dynamic templates are covered only by discovered concrete paths; private routes excluded"]}
(OUT/"report.json").write_text(json.dumps({"summary":summary,"results":results},ensure_ascii=False,indent=2))
print(json.dumps(summary,ensure_ascii=False),flush=True)
if summary["failed"] or discover_errors: sys.exit(1)
