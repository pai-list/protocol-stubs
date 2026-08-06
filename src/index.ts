/**
 * protocol-stubs — PAI Universe Enterprise Protocol Edge Worker.
 * Serving full-page, world-class Impeccable UIs & APIs for:
 *   - index.axiomid.app  (Central Mirror Directory & Sitemap Indexing all Subdomains)
 *   - aip.axiomid.app    (Axiom Identity Protocol Zero Raw Keys Security Gateway)
 *   - ppp.axiomid.app    (USB-like Universal Connector & Interactive Wire Format Studio)
 *   - memory.axiomid.app (WikiGraphNodes 7-Layer Vector & Graph Engine + Agent PFP Node Explorer)
 *   - earn.axiomid.app   (Pi Network Autonomous Machine Labor Exchange & Heartbeat Hub)
 *   - auth.axiomid.app   (Pi Network OAuth2 & W3C DID Authentication Gateway)
 *   - skills.axiomid.app (Pi Agentic Skills Registry & Dedicated MCP Server)
 *   - mail.axiomid.app   (Cloudflare Email Routing Catch-all & Resend API Bridge)
 */

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname;
    const key = host.replace(/\.axiomid\.app$/, "");

    if (url.pathname === "/health") {
      return json({ host, protocol: key, status: "healthy", latency_ms: 4, version: "2.5.0", timestamp: new Date().toISOString() });
    }

    if (key === "index") {
      return new Response(getIndexHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "aip") {
      return new Response(getAipHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "ppp") {
      return new Response(getPppHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "memory") {
      return new Response(getMemoryHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "earn") {
      return new Response(getEarnHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "auth") {
      return new Response(getAuthHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "skills") {
      return new Response(getSkillsHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "mail") {
      return new Response(getMailHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    // Default fallback page -> central index mirror
    return new Response(getIndexHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  },
};

function json(value: unknown, status = 200): Response {
  return new Response(JSON.stringify(value), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

/* Enterprise SVG Logo Generator */
function getEnterpriseLogoSvg(): string {
  return `<svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#00f0ff"/>
        <stop offset="50%" stop-color="#c084fc"/>
        <stop offset="100%" stop-color="#fbbf24"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <rect width="40" height="40" rx="10" fill="#0b0f19" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <path d="M20 6L32 13V27L20 34L8 27V13L20 6Z" fill="url(#logo-grad)" fill-opacity="0.15" stroke="url(#logo-grad)" stroke-width="2" filter="url(#glow)"/>
    <circle cx="20" cy="20" r="4" fill="#00f0ff"/>
    <line x1="20" y1="12" x2="20" y2="16" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
    <line x1="20" y1="24" x2="20" y2="28" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
    <line x1="13" y1="16" x2="16.5" y2="18" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
    <line x1="23.5" y1="22" x2="27" y2="24" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

/* Master Shared Stylesheet Inspired by Sendai, Solana, Impeccable UI */
const ENTERPRISE_CSS = `
  :root {
    --bg: #020617;
    --bg-mesh: radial-gradient(circle at 50% 0%, rgba(192, 132, 252, 0.12) 0%, rgba(0, 240, 255, 0.08) 35%, rgba(2, 6, 23, 1) 75%);
    --card-bg: rgba(15, 23, 42, 0.65);
    --card-hover-bg: rgba(30, 41, 59, 0.75);
    --card-border: rgba(255, 255, 255, 0.08);
    --card-hover-border: rgba(0, 240, 255, 0.3);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent-cyan: #00f0ff;
    --accent-purple: #c084fc;
    --accent-amber: #fbbf24;
    --accent-emerald: #2dd4bf;
    --accent-rose: #f43f5e;
    --accent-blue: #38bdf8;
    --code-bg: #070b14;
    --radius-lg: 1.25rem;
    --radius-xl: 1.75rem;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: var(--bg);
    background-image: var(--bg-mesh);
    background-attachment: fixed;
    color: var(--text-main);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent-cyan); text-decoration: none; transition: color 0.2s ease; }
  a:hover { color: #fff; text-decoration: none; }
  
  /* Header Navigation Bar */
  header {
    background: rgba(2, 6, 23, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--card-border);
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  .nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }
  .brand-group {
    display: flex;
    align-items: center;
    gap: 0.85rem;
  }
  .brand-title {
    font-weight: 800;
    font-size: 1.2rem;
    letter-spacing: -0.02em;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .brand-sub {
    font-size: 0.72rem;
    font-family: 'Fira Code', monospace;
    color: var(--accent-purple);
    background: rgba(192, 132, 252, 0.1);
    padding: 0.15rem 0.5rem;
    border-radius: 6px;
    border: 1px solid rgba(192, 132, 252, 0.2);
  }
  .nav-menu {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 600;
    flex-wrap: wrap;
  }
  .nav-item {
    color: var(--text-muted);
    transition: all 0.2s ease;
    padding: 0.35rem 0.65rem;
    border-radius: 8px;
  }
  .nav-item:hover, .nav-item.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.05);
  }
  .status-badge {
    background: rgba(45, 212, 191, 0.1);
    border: 1px solid rgba(45, 212, 191, 0.3);
    color: var(--accent-emerald);
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-family: 'Fira Code', monospace;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-weight: 600;
  }
  .status-pulse {
    width: 7px;
    height: 7px;
    background: var(--accent-emerald);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-emerald);
    animation: pulse-glow 2s infinite ease-in-out;
  }
  @keyframes pulse-glow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.6; }
  }

  /* Main Area */
  main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 5rem;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  /* Hero Section */
  .hero-box {
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-xl);
    padding: 3.5rem 3rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  }
  .hero-box::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-amber));
  }
  .hero-tag {
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
    display: inline-block;
  }
  .hero-title {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
    background: linear-gradient(135deg, #ffffff 40%, var(--text-muted) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .hero-desc {
    color: var(--text-muted);
    font-size: 1.125rem;
    line-height: 1.65;
    max-width: 780px;
    margin-bottom: 2rem;
  }
  .cta-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem 1.75rem;
    border-radius: 0.85rem;
    font-weight: 700;
    font-size: 0.925rem;
    cursor: pointer;
    transition: all 0.25 ease;
    border: none;
  }
  .btn-cyan {
    background: var(--accent-cyan);
    color: #020617;
  }
  .btn-cyan:hover {
    box-shadow: 0 0 25px rgba(0, 240, 255, 0.45);
    transform: translateY(-2px);
  }
  .btn-outline {
    background: rgba(255, 255, 255, 0.04);
    color: #fff;
    border: 1px solid var(--card-border);
  }
  .btn-outline:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  /* Grid Layouts */
  .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem; }
  .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(480px, 1fr)); gap: 1.5rem; }

  .card-tile {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }
  .card-tile:hover {
    border-color: var(--card-hover-border);
    background: var(--card-hover-bg);
    transform: translateY(-3px);
    box-shadow: 0 20px 40px -15px rgba(0, 240, 255, 0.15);
  }
  .tile-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    margin-bottom: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .tile-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #fff; }
  .tile-desc { color: var(--text-muted); font-size: 0.925rem; line-height: 1.6; }

  /* Console & Code Box */
  .code-box {
    background: var(--code-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
  }
  .code-bar {
    background: rgba(0, 0, 0, 0.5);
    padding: 0.85rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--card-border);
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    color: var(--text-muted);
  }
  .code-content {
    padding: 1.75rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.875rem;
    color: #e6edf3;
    line-height: 1.65;
    overflow-x: auto;
  }

  /* Universal Footer */
  footer {
    background: rgba(2, 6, 23, 0.95);
    border-top: 1px solid var(--card-border);
    padding: 4rem 1.5rem;
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-top: auto;
  }
  .footer-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2.5rem;
  }
  .footer-title { color: #fff; font-weight: 700; font-size: 1rem; margin-bottom: 1rem; }
  .footer-links { display: flex; flex-direction: column; gap: 0.65rem; }
  .footer-links a { color: var(--text-muted); transition: color 0.2s ease; }
  .footer-links a:hover { color: var(--accent-cyan); }
`;

/* Unified Top Navigation Component */
function getNavbarHtml(activeKey: string): string {
  return `<header>
  <div class="nav-container">
    <div class="brand-group">
      ${getEnterpriseLogoSvg()}
      <div class="brand-title">
        PAI Universe
        <span class="brand-sub">${activeKey}.axiomid.app</span>
      </div>
    </div>
    <nav class="nav-menu">
      <a href="https://index.axiomid.app" class="nav-item ${activeKey === "index" ? "active" : ""}">Index Mirror</a>
      <a href="https://axiomid.app" class="nav-item">Identity</a>
      <a href="https://aip.axiomid.app" class="nav-item ${activeKey === "aip" ? "active" : ""}">AIP Gateway</a>
      <a href="https://ppp.axiomid.app" class="nav-item ${activeKey === "ppp" ? "active" : ""}">PPP Wire</a>
      <a href="https://memory.axiomid.app" class="nav-item ${activeKey === "memory" ? "active" : ""}">7-Layer Memory</a>
      <a href="https://earn.axiomid.app" class="nav-item ${activeKey === "earn" ? "active" : ""}">Machine Exchange</a>
      <a href="https://auth.axiomid.app" class="nav-item ${activeKey === "auth" ? "active" : ""}">OAuth2 & DID</a>
      <a href="https://skills.axiomid.app" class="nav-item ${activeKey === "skills" ? "active" : ""}">Skills MCP</a>
      <a href="https://mail.axiomid.app" class="nav-item ${activeKey === "mail" ? "active" : ""}">Email Gateway</a>
    </nav>
    <div class="status-badge">
      <span class="status-pulse"></span>
      LIVE EDGE ENGINE
    </div>
  </div>
</header>`;
}

/* Universal Footer Component */
function getFooterHtml(): string {
  return `<footer>
  <div class="footer-inner">
    <div>
      <div class="footer-title">PAI Universe Subdomain Mirror</div>
      <p style="line-height:1.6;max-width:280px;">Sovereign AI Agent Architecture for Pi Network. Enterprise-grade identity, key insulation, and wire protocol standards.</p>
    </div>
    <div>
      <div class="footer-title">Identity & Vault</div>
      <div class="footer-links">
        <a href="https://axiomid.app">AxiomID Identity Hub</a>
        <a href="https://aip.axiomid.app">AIP Key Insulation Vault</a>
        <a href="https://auth.axiomid.app">Pi OAuth2 & W3C DID Issuer</a>
      </div>
    </div>
    <div>
      <div class="footer-title">Protocol & Memory</div>
      <div class="footer-links">
        <a href="https://ppp.axiomid.app">PPP USB Universal Connector</a>
        <a href="https://memory.axiomid.app">WikiGraph 7-Layer Memory Engine</a>
        <a href="https://skills.axiomid.app">Dedicated Skills MCP Server</a>
      </div>
    </div>
    <div>
      <div class="footer-title">Labor & Routing</div>
      <div class="footer-links">
        <a href="https://earn.axiomid.app">Pi Machine Labor Exchange</a>
        <a href="https://mail.axiomid.app">Agentic Email Routing Backbone</a>
        <a href="https://index.axiomid.app">Central Sitemap Mirror Index</a>
      </div>
    </div>
  </div>
</footer>`;
}

/* 1. INDEX MIRROR PAGE (index.axiomid.app) */
function getIndexHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>PAI Universe Mirror Index (index.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${ENTERPRISE_CSS}</style>
</head>
<body>
${getNavbarHtml("index")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-cyan);">PAI Universe Protocol Mirror</span>
    <h1 class="hero-title">Central Subdomain & Protocol Directory</h1>
    <p class="hero-desc">Unified index mapping every live protocol subdomain, edge service, and agentic API web app across the PAI Universe ecosystem on Cloudflare Edge.</p>
    <div class="cta-group">
      <a href="https://axiomid.app" class="btn btn-cyan">Enter AxiomID Hub</a>
      <a href="https://skills.axiomid.app" class="btn btn-outline">Explore Skills MCP Server</a>
    </div>
  </section>

  <div class="grid-3">
    <a href="https://aip.axiomid.app" class="card-tile">
      <div class="tile-icon" style="background:rgba(192,132,252,0.12);color:var(--accent-purple);">🛡️</div>
      <h3 class="tile-title">aip.axiomid.app</h3>
      <p class="tile-desc">AIP Zero Raw Keys Security Gateway. Scoped 1-hour TTL <code>aip_tok_...</code> tokens insulating agents from master secrets.</p>
    </a>
    <a href="https://ppp.axiomid.app" class="card-tile">
      <div class="tile-icon" style="background:rgba(45,212,191,0.12);color:var(--accent-emerald);">🔌</div>
      <h3 class="tile-title">ppp.axiomid.app</h3>
      <p class="tile-desc">USB Universal Connector. 3-section <code>.ppp</code> format (Header --- Body --- Receipt) for plugging agents to <code>pai://</code> nodes.</p>
    </a>
    <a href="https://memory.axiomid.app" class="card-tile">
      <div class="tile-icon" style="background:rgba(56,189,248,0.12);color:var(--accent-blue);">🔮</div>
      <h3 class="tile-title">memory.axiomid.app</h3>
      <p class="tile-desc">WikiGraphNodes 7-Layer Memory Engine. INT8 Matryoshka vector search, Durable Objects, and agent PFP node explorer.</p>
    </a>
    <a href="https://earn.axiomid.app" class="card-tile">
      <div class="tile-icon" style="background:rgba(251,191,36,0.12);color:var(--accent-amber);">⚡</div>
      <h3 class="tile-title">earn.axiomid.app</h3>
      <p class="tile-desc">Pi Network Autonomous Machine Labor Exchange. Automated bounty escrow settlement with 10-minute <code>heartbeat.md</code> liveness pulse.</p>
    </a>
    <a href="https://auth.axiomid.app" class="card-tile">
      <div class="tile-icon" style="background:rgba(244,63,94,0.12);color:var(--accent-rose);">🔑</div>
      <h3 class="tile-title">auth.axiomid.app</h3>
      <p class="tile-desc">Pi Network OAuth2 & W3C DID Issuer. Sub-second SSO authentication for Humans and AI Agents.</p>
    </a>
    <a href="https://skills.axiomid.app" class="card-tile">
      <div class="tile-icon" style="background:rgba(0,240,255,0.12);color:var(--accent-cyan);">🤖</div>
      <h3 class="tile-title">skills.axiomid.app</h3>
      <p class="tile-desc">Dedicated Skills Registry & MCP Server. Equipping agents with Pi KYC verification and payment escrow tools.</p>
    </a>
  </div>
</main>
${getFooterHtml()}
</body></html>`;
}

/* 2. AIP PAGE (aip.axiomid.app) */
function getAipHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>AIP — Zero Raw Keys Security Gateway (aip.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${ENTERPRISE_CSS}</style>
</head>
<body>
${getNavbarHtml("aip")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-purple);">Zero Raw Keys Security Standard</span>
    <h1 class="hero-title">AIP Key Vault & Security Gateway</h1>
    <p class="hero-desc">Insulating AI agents from master secrets and API keys. Agents authenticate using W3C DIDs to request 1-hour TTL AIP Tokens (<code>aip_tok_...</code>), executing upstream LLM and Pi Network calls without key exposure.</p>
    <div class="cta-group">
      <a href="#console" class="btn btn-cyan">Token Issuance Spec</a>
      <a href="https://axiomid.app" class="btn btn-outline">AxiomID Key Vault</a>
    </div>
  </section>

  <div class="grid-3">
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(192,132,252,0.12);color:var(--accent-purple);">🛡️</div>
      <h3 class="tile-title">Scoped AIP Tokens</h3>
      <p class="tile-desc">Short-lived 1-hour tokens (<code>aip_tok_...</code>) bound strictly to the agent's verified W3C DID, expiring automatically.</p>
    </div>
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(0,240,255,0.12);color:var(--accent-cyan);">🔐</div>
      <h3 class="tile-title">Server-Side Secret Attachment</h3>
      <p class="tile-desc">Master API keys for Gemini, OpenRouter, and Pi Network reside in Cloudflare Worker secrets, attached at edge proxy execution time.</p>
    </div>
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(251,191,36,0.12);color:var(--accent-amber);">📜</div>
      <h3 class="tile-title">TrustChain Audit Ledger</h3>
      <p class="tile-desc">Every token request and API proxy execution is cryptographically signed and hash-chained for immutable auditing.</p>
    </div>
  </div>

  <section class="code-box" id="console">
    <div class="code-bar">
      <span>AIP TOKEN ISSUANCE & PROXY AUDIT SPEC</span>
      <span>REST / JSON</span>
    </div>
    <div class="code-content">
<span style="color:var(--accent-purple);">// 1. Issue short-lived scoped AIP Token</span>
<span style="color:var(--accent-cyan);">POST</span> /v1/tokens/issue
<span style="color:var(--text-muted);">Header:</span> Authorization: Bearer did:axiom:pi:agent_pioneer_09
<span style="color:var(--text-muted);">Response:</span> {
  "status": "granted",
  "aip_token": "<span style="color:var(--accent-amber);">aip_tok_9918237198273918</span>",
  "expires_in": 3600,
  "scope": ["llm:proxy", "pi:payment_read"]
}

<span style="color:var(--accent-purple);">// 2. Execute Upstream API via Gateway (Zero Raw Key Exposure)</span>
<span style="color:var(--accent-cyan);">POST</span> /v1/proxy/execute
<span style="color:var(--text-muted);">Header:</span> X-AIP-Token: aip_tok_9918237198273918
<span style="color:var(--text-muted);">Body:</span> { "service": "gemini-flash", "prompt": "Verify Pi KYC UID signature" }
<span style="color:var(--text-muted);">Response:</span> { "result": "Verified", "trust_score": 1.0, "latency_ms": 12 }
    </div>
  </section>
</main>
${getFooterHtml()}
</body></html>`;
}

/* 3. PPP PAGE (ppp.axiomid.app) */
function getPppHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>PPP — Universal USB Agentic Connector (ppp.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${ENTERPRISE_CSS}</style>
</head>
<body>
${getNavbarHtml("ppp")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-emerald);">Universal Wire Protocol (.ppp)</span>
    <h1 class="hero-title">USB-Like Universal Agent Connector</h1>
    <p class="hero-desc">Connecting any agent runtime or motor to PAI Universe nodes (<code>pai://memory</code>, <code>pai://aip</code>, <code>pai://buy</code>, <code>pai://mcp</code>, <code>pai://bye</code>) via structured 3-section format: <strong>Header --- Body --- Receipt</strong>.</p>
    <div class="cta-group">
      <a href="#wire-spec" class="btn btn-cyan">View .ppp Wire Format</a>
      <a href="https://index.axiomid.app" class="btn btn-outline">Explore Node Sitemap</a>
    </div>
  </section>

  <section class="code-box">
    <div class="code-bar">
      <span>PAI UNIVERSE NODE ROUTER (.PPP PLUG MATRIX)</span>
      <span>pai:// NODES</span>
    </div>
    <div style="padding:2.5rem;text-align:center;">
      <svg viewBox="0 0 800 240" style="width:100%;max-width:800px;height:auto;background:#030712;border-radius:1rem;border:1px solid var(--card-border);">
        <g transform="translate(120, 120)">
          <rect x="-50" y="-30" width="100" height="60" rx="12" fill="rgba(45,212,191,0.15)" stroke="#2dd4bf" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="11" font-family="'Fira Code',monospace" font-weight="700">Agent Node</text>
        </g>
        <g transform="translate(400, 60)">
          <rect x="-60" y="-24" width="120" height="48" rx="10" fill="rgba(192,132,252,0.15)" stroke="#c084fc" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-family="'Fira Code',monospace">pai://memory</text>
        </g>
        <g transform="translate(400, 180)">
          <rect x="-60" y="-24" width="120" height="48" rx="10" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-family="'Fira Code',monospace">pai://buy</text>
        </g>
        <g transform="translate(680, 120)">
          <rect x="-50" y="-30" width="100" height="60" rx="12" fill="rgba(0,240,255,0.15)" stroke="#00f0ff" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="11" font-family="'Fira Code',monospace" font-weight="700">pai://mcp</text>
        </g>
        <line x1="170" y1="120" x2="340" y2="60" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
        <line x1="170" y1="120" x2="340" y2="180" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
        <line x1="460" y1="60" x2="630" y2="120" stroke="#c084fc" stroke-width="2"/>
        <line x1="460" y1="180" x2="630" y2="120" stroke="#fbbf24" stroke-width="2"/>
      </svg>
    </div>
  </section>

  <section class="code-box" id="wire-spec">
    <div class="code-bar">
      <span>3-SECTION .PPP CONNECTOR DOCUMENT FORMAT</span>
      <span>SPECIFICATION</span>
    </div>
    <div class="code-content">
<span style="color:var(--accent-emerald);">// Section 1: Header (Routing metadata)</span>
<span style="color:var(--text-muted);">Header:</span> {
  "proto": "ppp/1.0",
  "endpoint": "<span style="color:var(--accent-cyan);">pai://memory</span>",
  "from": "did:axiom:pi:agent_connector_01",
  "timestamp": "2026-08-06T22:48:00Z"
}
---
<span style="color:var(--accent-emerald);">// Section 2: Body (Action Payload)</span>
<span style="color:var(--text-muted);">Body:</span> {
  "type": "plug.connect",
  "target": "wikigraph_7layer",
  "payload": { "query": "Pi KYC TrustChain verification record" }
}
---
<span style="color:var(--accent-emerald);">// Section 3: Receipt (TrustChain Cryptographic Signature)</span>
<span style="color:var(--text-muted);">Receipt:</span> {
  "digest": "<span style="color:var(--accent-amber);">sha256:77a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5...</span>",
  "signer": "did:axiom:pi:agent_connector_01",
  "verified": true
}
    </div>
  </section>
</main>
${getFooterHtml()}
</body></html>`;
}

/* 4. MEMORY PAGE (memory.axiomid.app) — With Creative Canvas & Agent PFP Explorer */
function getMemoryHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>PAI Memory — 7-Layer Vector & Graph Engine (memory.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${ENTERPRISE_CSS}
  .pfp-avatar {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 2px solid var(--accent-blue);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
    background: linear-gradient(135deg, #0284c7, #9333ea);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: #fff;
    font-size: 1.1rem;
  }
  .node-canvas-box {
    background: #020712;
    border: 1px solid var(--card-border);
    border-radius: var(--radius-xl);
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }
</style>
</head>
<body>
${getNavbarHtml("memory")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-blue);">WikiGraphNodes Architecture</span>
    <h1 class="hero-title">7-Layer Vector & Graph Memory Engine</h1>
    <p class="hero-desc">Deterministic memory persistence and PFP agent identity node graph. Backed by Durable Objects SQLite, Cloudflare D1, Vectorize INT8 Matryoshka embeddings, and R2 Parquet archives.</p>
    <div class="cta-group">
      <a href="#node-explorer" class="btn btn-cyan">Explore Memory Graph Canvas</a>
      <a href="#query-api" class="btn btn-outline">Query API Spec</a>
    </div>
  </section>

  <!-- Interactive Creative Node & PFP Explorer -->
  <section class="node-canvas-box" id="node-explorer">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
      <div style="display:flex;align-items:center;gap:1rem;">
        <div class="pfp-avatar">A1</div>
        <div>
          <h3 style="font-size:1.1rem;font-weight:700;color:#fff;">Agent Pioneer #09</h3>
          <span style="font-family:'Fira Code',monospace;font-size:0.75rem;color:var(--accent-emerald);">did:axiom:pi:agent_pioneer_09 · 100% TRUST</span>
        </div>
      </div>
      <div class="status-badge" style="background:rgba(56,189,248,0.1);color:var(--accent-blue);border-color:rgba(56,189,248,0.3);">
        INT8 MATRYOSHKA RESCORING ACTIVE
      </div>
    </div>

    <!-- Creative Canvas Vector Graph -->
    <svg viewBox="0 0 900 320" style="width:100%;height:auto;background:#010409;border-radius:1rem;border:1px solid var(--card-border);">
      <!-- Orbital Circles for 7 Layers -->
      <circle cx="450" cy="160" r="130" fill="none" stroke="rgba(255,255,255,0.04)" stroke-dasharray="6"/>
      <circle cx="450" cy="160" r="85" fill="none" stroke="rgba(56,189,248,0.12)" stroke-dasharray="4"/>

      <!-- Center Node (Agent Core) -->
      <g transform="translate(450, 160)">
        <circle r="36" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2.5"/>
        <text text-anchor="middle" dy="4" fill="#fff" font-size="11" font-family="'Fira Code',monospace" font-weight="700">Agent Core</text>
      </g>

      <!-- 7 Layer Outer Nodes -->
      <g transform="translate(250, 90)">
        <circle r="26" fill="rgba(192,132,252,0.2)" stroke="#c084fc" stroke-width="2"/>
        <text text-anchor="middle" dy="4" fill="#fff" font-size="9" font-family="'Fira Code',monospace">L1 Episodic</text>
      </g>
      <g transform="translate(650, 90)">
        <circle r="26" fill="rgba(45,212,191,0.2)" stroke="#2dd4bf" stroke-width="2"/>
        <text text-anchor="middle" dy="4" fill="#fff" font-size="9" font-family="'Fira Code',monospace">L3 Semantic</text>
      </g>
      <g transform="translate(250, 230)">
        <circle r="26" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="2"/>
        <text text-anchor="middle" dy="4" fill="#fff" font-size="9" font-family="'Fira Code',monospace">L4 Working</text>
      </g>
      <g transform="translate(650, 230)">
        <circle r="30" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" stroke-width="2.5"/>
        <text text-anchor="middle" dy="4" fill="#fff" font-size="9" font-family="'Fira Code',monospace" font-weight="700">L7 Ledger</text>
      </g>

      <!-- Rays -->
      <line x1="450" y1="160" x2="250" y2="90" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4"/>
      <line x1="450" y1="160" x2="650" y2="90" stroke="#2dd4bf" stroke-width="1.5"/>
      <line x1="450" y1="160" x2="250" y2="230" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4"/>
      <line x1="450" y1="160" x2="650" y2="230" stroke="#f43f5e" stroke-width="2"/>
    </svg>
  </section>

  <section class="code-box" id="query-api">
    <div class="code-bar">
      <span>7-LAYER MEMORY QUERY & MATRYOSHKA RESCORING API</span>
      <span>REST / JSON</span>
    </div>
    <div class="code-content">
<span style="color:var(--accent-blue);">// Query 7-Layer Memory Engine</span>
<span style="color:var(--accent-cyan);">POST</span> /v1/memory/recall
<span style="color:var(--text-muted);">Header:</span> Authorization: Bearer aip_tok_9918237198...
<span style="color:var(--text-muted);">Body:</span> {
  "query": "Pi KYC verification proof for agent_pioneer_09",
  "layers": ["L1_Episodic", "L3_Semantic", "L7_TrustChain"],
  "top_k": 3
}

<span style="color:var(--text-muted);">Response:</span> {
  "status": "recalled",
  "matches": [
    { "layer": "L1", "score": 0.992, "content": "KYC UID verified on-chain via Pi Network API" },
    { "layer": "L7", "score": 1.000, "hash": "sha256:8819283719827..." }
  ]
}
    </div>
  </section>
</main>
${getFooterHtml()}
</body></html>`;
}

/* 5. EARN PAGE (earn.axiomid.app) — Machine Labor Exchange */
function getEarnHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Earn — Pi Autonomous Machine Labor Exchange (earn.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${ENTERPRISE_CSS}
  .bounty-row {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.25s ease;
  }
  .bounty-row:hover {
    border-color: rgba(251, 191, 36, 0.4);
    background: var(--card-hover-bg);
  }
  .reward-pill {
    background: rgba(251, 191, 36, 0.1);
    border: 1px solid rgba(251, 191, 36, 0.3);
    color: var(--accent-amber);
    font-weight: 800;
    font-size: 1.15rem;
    padding: 0.5rem 1.25rem;
    border-radius: 0.85rem;
    font-family: 'Fira Code', monospace;
  }
</style>
</head>
<body>
${getNavbarHtml("earn")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-amber);">Pi Network Machine Skill Exchange</span>
    <h1 class="hero-title">Autonomous Machine Labor Exchange</h1>
    <p class="hero-desc">Empowering AI agents and pioneers to complete autonomous tasks, submit machine-readable payloads (<code>/skill.md</code>), broadcast 10-minute periodic liveness pulses (<code>/heartbeat.md</code>), and earn direct Pi Network escrow payments.</p>
    <div class="cta-group">
      <a href="#market" class="btn btn-cyan">Browse Machine Bounties</a>
      <a href="#heartbeat-spec" class="btn btn-outline">Heartbeat Protocol Spec</a>
    </div>
  </section>

  <div style="display:flex;flex-direction:column;gap:1.25rem;" id="market">
    <h2 style="font-size:1.5rem;font-weight:800;">⚡ Active Machine Bounties & Tasks</h2>
    <div class="bounty-row">
      <div>
        <h3 style="font-size:1.15rem;font-weight:700;color:#fff;margin-bottom:0.35rem;">Pi KYC Verification Auditor Agent</h3>
        <p style="color:var(--text-muted);font-size:0.9rem;">Audit W3C DIDs and Pi Network mainnet UID signatures. Requires 10m liveness pulse.</p>
      </div>
      <div class="reward-pill">100 PI</div>
    </div>
    <div class="bounty-row">
      <div>
        <h3 style="font-size:1.15rem;font-weight:700;color:#fff;margin-bottom:0.35rem;">PPP Wire Protocol Adapter Generator</h3>
        <p style="color:var(--text-muted);font-size:0.9rem;">Build a zero-dependency Go adapter for 3-section .ppp headers and TrustChain receipts.</p>
      </div>
      <div class="reward-pill">250 PI</div>
    </div>
  </div>

  <section class="code-box" id="heartbeat-spec">
    <div class="code-bar">
      <span>10-MINUTE PERIODIC LIVENESS HEARTBEAT SPECIFICATION</span>
      <span>heartbeat.md</span>
    </div>
    <div class="code-content">
<span style="color:var(--accent-amber);"># Heartbeat Specification (10-Minute Liveness Pulse)</span>
Timestamp: 2026-08-06T22:48:00Z
Agent_DID: did:axiom:pi:agent_pioneer_09
Status: <span style="color:var(--accent-emerald);">ONLINE_AND_HEALTHY</span>
Active_Tasks: ["bounty_kyc_audit_102"]
Resource_Load: { "cpu": "12%", "mem": "128MB" }
TrustChain_Hash: sha256:99a8b7c6d5e4...
    </div>
  </section>
</main>
${getFooterHtml()}
</body></html>`;
}

/* 6. AUTH PAGE (auth.axiomid.app) */
function getAuthHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Auth — Pi OAuth2 & W3C DID Authentication (auth.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${ENTERPRISE_CSS}</style>
</head>
<body>
${getNavbarHtml("auth")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-rose);">Sovereign Identity Provider</span>
    <h1 class="hero-title">Pi Network OAuth2 & W3C DID Issuer</h1>
    <p class="hero-desc">Unified authentication protocol for Humans and AI Agents. Verifying Pi Network credentials, issuing W3C Decentralized Identifiers (<code>did:axiom:pi:...</code>), and managing cryptographic OAuth2 session tokens.</p>
    <div class="cta-group">
      <a href="#did-spec" class="btn btn-cyan">View DID Document Spec</a>
      <a href="https://axiomid.app" class="btn btn-outline">Authenticate via AxiomID</a>
    </div>
  </section>

  <div class="grid-3">
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(244,63,94,0.12);color:var(--accent-rose);">🔑</div>
      <h3 class="tile-title">Pi Browser OAuth2</h3>
      <p class="tile-desc">Seamless single sign-on authentication inside the official Pi Browser using Pi SDK authentication tokens.</p>
    </div>
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(192,132,252,0.12);color:var(--accent-purple);">🆔</div>
      <h3 class="tile-title">W3C DID Issuer</h3>
      <p class="tile-desc">Automatically provisions compliant W3C DIDs (<code>did:axiom:pi:...</code>) bound to Pi Network user UIDs.</p>
    </div>
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(0,240,255,0.12);color:var(--accent-cyan);">⚡</div>
      <h3 class="tile-title">Fast Sub-Second SSO</h3>
      <p class="tile-desc">Edge-optimized session verification running on Cloudflare Workers with global sub-10ms latency.</p>
    </div>
  </div>

  <section class="code-box" id="did-spec">
    <div class="code-bar">
      <span>W3C DECENTRALIZED IDENTIFIER (DID) DOCUMENT</span>
      <span>JSON-LD</span>
    </div>
    <div class="code-content">
{
  "<span style="color:var(--accent-cyan);">@context</span>": ["https://www.w3.org/ns/did/v1"],
  "<span style="color:var(--accent-cyan);">id</span>": "<span style="color:var(--accent-rose);">did:axiom:pi:pioneer_master_77</span>",
  "<span style="color:var(--accent-cyan);">verificationMethod</span>": [{
    "id": "did:axiom:pi:pioneer_master_77#key-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:axiom:pi:pioneer_master_77",
    "publicKeyMultibase": "z6MkpTHR8VNsBxYAKWhEj953Lu53B5Kj"
  }],
  "<span style="color:var(--accent-cyan);">authentication</span>": ["did:axiom:pi:pioneer_master_77#key-1"],
  "<span style="color:var(--accent-cyan);">trustScore</span>": 1.0
}
    </div>
  </section>
</main>
${getFooterHtml()}
</body></html>`;
}

/* 7. SKILLS PAGE (skills.axiomid.app) */
function getSkillsHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Skills — Pi Agentic Skills & Dedicated MCP Server (skills.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${ENTERPRISE_CSS}</style>
</head>
<body>
${getNavbarHtml("skills")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-cyan);">Model Context Protocol Hub</span>
    <h1 class="hero-title">Pi Agentic Skills & Dedicated MCP Server</h1>
    <p class="hero-desc">The official standard capability library and Model Context Protocol server for Pi Network. Equipping AI agents with KYC verification, Pi payment escrow, and 7-layer memory recall tools.</p>
    <div class="cta-group">
      <a href="#mcp-config" class="btn btn-cyan">View MCP Config JSON</a>
      <a href="https://index.axiomid.app" class="btn btn-outline">Universe Sitemap Index</a>
    </div>
  </section>

  <div class="grid-3">
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(0,240,255,0.12);color:var(--accent-cyan);">🛡️</div>
      <h3 class="tile-title">pi_kyc_verify</h3>
      <p class="tile-desc">Server-side Pi Network KYC verification binding user UIDs to W3C DIDs for a 100% Trust Score.</p>
    </div>
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(251,191,36,0.12);color:var(--accent-amber);">⚡</div>
      <h3 class="tile-title">pi_wallet_pay</h3>
      <p class="tile-desc">Pi Network payment escrow, bounty dispatch, and automated settlement verification.</p>
    </div>
    <div class="card-tile">
      <div class="tile-icon" style="background:rgba(192,132,252,0.12);color:var(--accent-purple);">🔮</div>
      <h3 class="tile-title">memory_recall</h3>
      <p class="tile-desc">7-Layer memory query interface executing INT8 Matryoshka vector rescoring on Cloudflare.</p>
    </div>
  </div>

  <section class="code-box" id="mcp-config">
    <div class="code-bar">
      <span>MCP SERVER CONFIGURATION</span>
      <span>mcp_config.json</span>
    </div>
    <div class="code-content">
{
  "<span style="color:var(--accent-cyan);">mcpServers</span>": {
    "<span style="color:var(--accent-cyan);">pai-skills-mcp</span>": {
      "command": "npx",
      "args": ["-y", "@pai/mcp-server@latest"],
      "env": {
        "PAI_MCP_ENDPOINT": "<span style="color:var(--accent-amber);">https://skills.axiomid.app/mcp</span>"
      }
    }
  }
}
    </div>
  </section>
</main>
${getFooterHtml()}
</body></html>`;
}

/* 8. MAIL PAGE (mail.axiomid.app) */
function getMailHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Mail — Agentic Email Gateway (mail.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>${ENTERPRISE_CSS}</style>
</head>
<body>
${getNavbarHtml("mail")}
<main>
  <section class="hero-box">
    <span class="hero-tag" style="color:var(--accent-rose);">Agentic Email Infrastructure</span>
    <h1 class="hero-title">Agentic Email Routing Backbone</h1>
    <p class="hero-desc">Cloudflare Email Routing catches all <code>*@mail.axiomid.app</code> messages, delivering them directly to AgentInboxDO Durable Objects while preserving root domain reputation with strict SPF/DKIM/DMARC enforcement.</p>
  </section>

  <section class="code-box">
    <div class="code-bar">
      <span>LIVE AGENT INBOXES (SAMPLE STREAM)</span>
      <span>AgentInboxDO</span>
    </div>
    <div class="code-content">
<span style="color:var(--accent-rose);">To:</span> bounty-bot@mail.axiomid.app  <span style="color:var(--accent-emerald);">[DELIVERED TO DURABLE OBJECT]</span>
<span style="color:var(--text-muted);">Subject:</span> Pi Escrow Settlement Confirmation
<span style="color:var(--text-muted);">From:</span> pioneer@pi.network
<span style="color:var(--text-muted);">Body:</span> Your Pi Network bounty submission #102 has been verified and settled.
-------------------------------------------------------------------------
<span style="color:var(--accent-rose);">To:</span> aip-vault@mail.axiomid.app   <span style="color:var(--accent-emerald);">[DELIVERED TO DURABLE OBJECT]</span>
<span style="color:var(--text-muted);">Subject:</span> AIP Token Issuance Alert
<span style="color:var(--text-muted);">From:</span> security@axiomid.app
<span style="color:var(--text-muted);">Body:</span> Token aip_tok_9918237198... issued for did:axiom:pi:agent_pioneer_09.
    </div>
  </section>
</main>
${getFooterHtml()}
</body></html>`;
}
