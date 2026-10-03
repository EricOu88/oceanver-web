import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px',
        }}
      >
        {/* 顶部装饰线 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)',
          }}
        />

        {/* 主标题 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.2,
              letterSpacing: '-1px',
            }}
          >
            美国手机卡 · 宽带
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#60a5fa',
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            中文一站式办理
          </div>
        </div>

        {/* 副标题 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '36px',
              fontWeight: 600,
              color: '#fbbf24',
              padding: '12px 28px',
              background: 'rgba(251, 191, 36, 0.15)',
              borderRadius: '12px',
              border: '2px solid rgba(251, 191, 36, 0.3)',
            }}
          >
            无需 SSN
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#94a3b8',
            }}
          >
            ｜
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            18 年湾区实体店
          </div>
        </div>

        {/* 品牌 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              fontSize: '42px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            美国鸿达电讯
          </div>
        </div>

        {/* 地域 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '28px',
            color: '#94a3b8',
          }}
        >
          <span>United States</span>
        </div>

        {/* 底部装饰 */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '22px',
            color: '#64748b',
          }}
        >
          <span>oceanver.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
