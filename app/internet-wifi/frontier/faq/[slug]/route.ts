const headers = {
  'Content-Type': 'text/html; charset=utf-8',
  'X-Robots-Tag': 'noindex, nofollow',
  'Cache-Control': 'public, max-age=3600',
}

export async function GET() {
  return new Response(
    `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex,nofollow">
  <title>页面已停用｜美国鸿达电讯</title>
</head>
<body>
  <main>
    <h1>这个旧问题页面已经停用</h1>
    <p>相关 Frontier 常见问题已经集中到新的问题总览页。</p>
    <p><a href="/internet/frontier/faq">查看 Frontier 常见问题</a></p>
  </main>
</body>
</html>`,
    { status: 410, headers },
  )
}

export async function HEAD() {
  return new Response(null, { status: 410, headers })
}