import 'server-only'

type NewCommentNotification = {
  commentId: string
  pageKey: string
  nickname: string
  body: string
  createdAt: string
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }
    return entities[character]
  })
}

export async function notifyNewComment({ commentId, pageKey, nickname, body, createdAt }: NewCommentNotification) {
  const apiKey = process.env.RESEND_API_KEY
  const recipients = process.env.COMMUNITY_NOTIFICATION_EMAILS
    ?.split(',')
    .map((value) => value.trim())
    .filter(Boolean)

  if (!apiKey || !recipients?.length) return

  const safePageKey = escapeHtml(pageKey)
  const safeNickname = escapeHtml(nickname)
  const safeBody = escapeHtml(body).replace(/\r?\n/g, '<br />')
  const safeCreatedAt = escapeHtml(createdAt)
  const adminUrl = 'https://oceanver.com/admin/community?comment=' + encodeURIComponent(commentId)
  const subject = '\u3010Oceanver \u65b0\u8bc4\u8bba\u3011' + pageKey
  const text = '\u9875\u9762\uff1a' + pageKey
    + '\n\n\u6635\u79f0\uff1a' + nickname
    + '\n\n\u8bc4\u8bba\uff1a\n' + body
    + '\n\n\u65f6\u95f4\uff1a' + createdAt
    + '\n\n\u6253\u5f00\u540e\u53f0\u56de\u590d\uff1a' + adminUrl

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Oceanver <notifications@oceanver.com>',
      to: recipients,
      subject,
      text,
      html: '<h2>Oceanver \u65b0\u8bc4\u8bba</h2>'
        + '<p><strong>\u9875\u9762\uff1a</strong>' + safePageKey + '</p>'
        + '<p><strong>\u6635\u79f0\uff1a</strong>' + safeNickname + '</p>'
        + '<p><strong>\u8bc4\u8bba\uff1a</strong><br />' + safeBody + '</p>'
        + '<p><strong>\u65f6\u95f4\uff1a</strong>' + safeCreatedAt + '</p>'
        + '<p><a href="' + adminUrl + '" style="display:inline-block;padding:12px 20px;background:#111;color:#fff;text-decoration:none;border-radius:6px;">\u6253\u5f00\u540e\u53f0\u56de\u590d</a></p>',
    }),
  })

  if (!response.ok) {
    throw new Error('Resend API request failed with status ' + response.status)
  }
}
