/**
 * protocol-stubs — PAI Universe Edge Protocol Subdomains Worker.
 * Unified high-performance Cloudflare Worker serving full-page Impeccable UIs & APIs for:
 *   - aip.axiomid.app    (Axiom Identity Protocol Zero Raw Keys Security Gateway)
 *   - ppp.axiomid.app    (USB-like Universal Connector & Interactive Wire Format Studio)
 *   - memory.axiomid.app (WikiGraphNodes 7-Layer Interactive Memory Explorer)
 *   - earn.axiomid.app   (Pi Agentic Labor Marketplace & Superteam Heartbeat)
 *   - auth.axiomid.app   (Pi OAuth2 & W3C DID Authentication Gateway)
 *   - skills.axiomid.app (Pi Agentic Skills Registry & Dedicated MCP Server)
 *   - mail.axiomid.app   (Cloudflare Email Routing Catch-all & Resend API Bridge)
 */

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname;
    const key = host.replace(/\.axiomid\.app$/, "");

    if (url.pathname === "/health") {
      return json({ host, protocol: key, status: "live", version: "2.0.0", timestamp: new Date().toISOString() });
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

    // Default fallback page
    return new Response(getAuthHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  },
};

function json(value: unknown, status = 200): Response {
  return new Response(JSON.stringify(value), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

/* Common CSS Styling for High Token Level Consistency */
const BASE_CSS = `
  :root {
    --bg: #020617;
    --card-bg: rgba(15, 23, 42, 0.75);
    --card-border: rgba(255, 255, 255, 0.08);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --accent-cyan: #00f0ff;
    --accent-purple: #c084fc;
    --accent-amber: #fbbf24;
    --accent-emerald: #2dd4bf;
    --accent-rose: #f43f5e;
    --accent-blue: #38bdf8;
    --code-bg: #0b0f19;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: var(--bg);
    color: var(--text-main);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    line-height: 1.5;
  }
  a { color: var(--accent-cyan); text-decoration: none; }
  a:hover { text-decoration: underline; }
  
  /* Header Nav */
  header {
    background: rgba(2, 6, 23, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--card-border);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
  }
  .brand-logo {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: 900;
    font-size: 0.9rem;
  }
  .nav-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .nav-links a {
    color: var(--text-muted);
    transition: color 0.2s ease;
  }
  .nav-links a:hover, .nav-links a.active {
    color: var(--text-main);
    text-decoration: none;
  }
  .badge-live {
    background: rgba(45, 212, 191, 0.1);
    border: 1px solid rgba(45, 212, 191, 0.3);
    color: var(--accent-emerald);
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-family: 'Fira Code', monospace;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
  .badge-live::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--accent-emerald);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--accent-emerald);
  }

  /* Main Container */
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4rem;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  /* Hero Banner */
  .hero-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 1.5rem;
    padding: 3rem 2.5rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
  }
  .hero-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
  }
  .hero-tag {
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
    display: block;
  }
  .hero-title {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
  }
  .hero-desc {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.6;
    max-width: 720px;
    margin-bottom: 1.75rem;
  }
  .btn-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }
  .btn-primary {
    background: var(--accent-cyan);
    color: #020617;
  }
  .btn-primary:hover {
    box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
    transform: translateY(-1px);
    text-decoration: none;
  }
  .btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-main);
    border: 1px solid var(--card-border);
  }
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }

  /* Grid Layouts */
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 1.5rem;
  }

  .feature-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 1.25rem;
    padding: 1.75rem;
    transition: border-color 0.2s ease, transform 0.2s ease;
  }
  .feature-card:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  .feature-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
  .feature-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .feature-desc {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.55;
  }

  /* Code Console */
  .console-box {
    background: var(--code-bg);
    border: 1px solid var(--card-border);
    border-radius: 1.25rem;
    overflow: hidden;
  }
  .console-header {
    background: rgba(0, 0, 0, 0.4);
    padding: 0.75rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--card-border);
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    color: var(--text-muted);
  }
  .console-body {
    padding: 1.5rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.85rem;
    color: #e6edf3;
    line-height: 1.6;
    overflow-x: auto;
  }

  /* Footer */
  footer {
    background: rgba(2, 6, 23, 0.95);
    border-top: 1px solid var(--card-border);
    padding: 3rem 1.5rem;
    font-size: 0.875rem;
    color: var(--text-muted);
  }
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .footer-col h4 {
    color: var(--text-main);
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }
`;

/* 1. AIP — Zero Raw Keys Security Gateway Page */
function getAipHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>AIP — Zero Raw Keys Security Gateway (aip.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${BASE_CSS}
  .hero-card::before { background: linear-gradient(90deg, var(--accent-purple), var(--accent-cyan), var(--accent-amber)); }
</style>
</head>
<body>
<header>
  <div class="nav-container">
    <div class="brand">
      <div class="brand-logo" style="background:linear-gradient(135deg, #c084fc, #00f0ff);">AIP</div>
      <span>aip.axiomid.app</span>
    </div>
    <div class="nav-links">
      <a href="https://axiomid.app">AxiomID</a>
      <a href="https://skills.axiomid.app">Skills</a>
      <a href="https://earn.axiomid.app">Earn</a>
      <a href="https://ppp.axiomid.app">PPP Protocol</a>
      <a href="https://memory.axiomid.app">Memory</a>
      <span class="badge-live">ZERO RAW KEYS GATEWAY</span>
    </div>
  </div>
</header>
<main>
  <section class="hero-card">
    <span class="hero-tag" style="color:var(--accent-purple);">Axiom Identity Protocol (AIP) Standard</span>
    <h1 class="hero-title">Zero Raw Keys Security Gateway</h1>
    <p class="hero-desc">Insulating AI agents from long-lived API keys and master secrets. Agents authenticate via W3C DIDs to receive 1-hour scoped AIP Tokens (<code>aip_tok_...</code>), executing encrypted upstream API requests without ever seeing raw credentials.</p>
    <div class="btn-group">
      <a href="#token-flow" class="btn btn-primary">Token Issuance Flow</a>
      <a href="#api-spec" class="btn btn-secondary">API Proxy Specification</a>
    </div>
  </section>

  <div class="grid-3">
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(192,132,252,0.1);color:var(--accent-purple);">🛡️</div>
      <h3 class="feature-title">1-Hour TTL AIP Tokens</h3>
      <p class="feature-desc">Short-lived scoped tokens (<code>aip_tok_...</code>) bound strictly to the agent's verified W3C DID, automatically invalidating after expiry.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(0,240,255,0.1);color:var(--accent-cyan);">🔐</div>
      <h3 class="feature-title">Server-Side Key Attachment</h3>
      <p class="feature-desc">Master keys for Gemini, OpenRouter, and Pi Network APIs reside inside Cloudflare Worker encrypted secrets, injected strictly at edge proxy runtime.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(251,191,36,0.1);color:var(--accent-amber);">📜</div>
      <h3 class="feature-title">TrustChain Audit Logs</h3>
      <p class="feature-desc">Every token request and API proxy execution is cryptographically signed and hash-chained to guarantee immutable auditability.</p>
    </div>
  </div>

  <section class="console-box" id="token-flow">
    <div class="console-header">
      <span>AIP TOKEN & PROXY WORKFLOW</span>
      <span>REST / JSON</span>
    </div>
    <div class="console-body">
<span style="color:var(--accent-purple);">// 1. Issue short-lived AIP Token for Agent</span>
<span style="color:var(--accent-cyan);">POST</span> /v1/tokens/issue
<span style="color:var(--text-muted);">Header:</span> Authorization: Bearer did:axiom:pi:agent_pioneer_09
<span style="color:var(--text-muted);">Response:</span> {
  "status": "granted",
  "aip_token": "<span style="color:var(--accent-amber);">aip_tok_77f891a2b03c4d5e6f7a8b9c</span>",
  "expires_in": 3600,
  "scope": ["llm:proxy", "pi:payment_read"]
}

<span style="color:var(--accent-purple);">// 2. Execute Upstream API via Proxy (Zero Raw Key exposure)</span>
<span style="color:var(--accent-cyan);">POST</span> /v1/proxy/execute
<span style="color:var(--text-muted);">Header:</span> X-AIP-Token: aip_tok_77f891a2b03c4d5e6f7a8b9c
<span style="color:var(--text-muted);">Body:</span> { "service": "gemini-flash", "prompt": "Verify Pi KYC signature" }
<span style="color:var(--text-muted);">Response:</span> { "result": "Verified", "trust_score": 1.0, "latency_ms": 14 }
    </div>
  </section>
</main>
<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h4>PAI Universe Protocols</h4>
      <a href="https://axiomid.app">AxiomID Identity</a>
      <a href="https://aip.axiomid.app">AIP Key Vault</a>
      <a href="https://ppp.axiomid.app">PPP USB Protocol</a>
    </div>
    <div class="footer-col">
      <h4>Agent Marketplace</h4>
      <a href="https://earn.axiomid.app">Earn Marketplace</a>
      <a href="https://skills.axiomid.app">Skills MCP Hub</a>
      <a href="https://memory.axiomid.app">WikiGraph Memory</a>
    </div>
    <div class="footer-col">
      <h4>Security Guarantee</h4>
      <p style="max-width:280px;line-height:1.5;">AIP Zero Raw Keys Security standard enforces zero key leaks across all agent runtimes in PAI Universe.</p>
    </div>
  </div>
</footer>
</body></html>`;
}

/* 2. PPP — USB Universal Connector Page */
function getPppHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>PPP — Universal USB Agentic Connector (ppp.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${BASE_CSS}
  .hero-card::before { background: linear-gradient(90deg, var(--accent-emerald), var(--accent-purple), var(--accent-amber)); }
</style>
</head>
<body>
<header>
  <div class="nav-container">
    <div class="brand">
      <div class="brand-logo" style="background:linear-gradient(135deg, #2dd4bf, #c084fc);">PPP</div>
      <span>ppp.axiomid.app</span>
    </div>
    <div class="nav-links">
      <a href="https://axiomid.app">AxiomID</a>
      <a href="https://skills.axiomid.app">Skills</a>
      <a href="https://earn.axiomid.app">Earn</a>
      <a href="https://aip.axiomid.app">AIP Gateway</a>
      <a href="https://memory.axiomid.app">Memory</a>
      <span class="badge-live">USB WIRE CONNECTOR</span>
    </div>
  </div>
</header>
<main>
  <section class="hero-card">
    <span class="hero-tag" style="color:var(--accent-emerald);">Universal Wire Protocol (.ppp)</span>
    <h1 class="hero-title">USB-Like Universal Agent Connector</h1>
    <p class="hero-desc">Connecting any agent runtime or motor to PAI Universe nodes (<code>pai://memory</code>, <code>pai://aip</code>, <code>pai://buy</code>, <code>pai://mcp</code>). Built on a 3-section format: <strong>Header --- Body --- Receipt</strong>.</p>
    <div class="btn-group">
      <a href="#wire-spec" class="btn btn-primary">Inspect .ppp Spec</a>
      <a href="#node-graph" class="btn btn-secondary">Universe Node Graph</a>
    </div>
  </section>

  <section class="console-box" id="node-graph">
    <div class="console-header">
      <span>UNIVERSE INTERACTIVE NODE GRAPH</span>
      <span>pai:// GRAPH ROUTER</span>
    </div>
    <div style="padding:2rem;text-align:center;">
      <svg viewBox="0 0 800 240" style="width:100%;max-width:750px;height:auto;background:#010409;border-radius:1rem;border:1px solid var(--card-border);">
        <g transform="translate(120, 120)">
          <circle r="36" fill="rgba(45,212,191,0.15)" stroke="#2dd4bf" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="11" font-family="'Fira Code',monospace" font-weight="700">Agent Node</text>
        </g>
        <g transform="translate(400, 60)">
          <circle r="28" fill="rgba(192,132,252,0.15)" stroke="#c084fc" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-family="'Fira Code',monospace">pai://memory</text>
        </g>
        <g transform="translate(400, 180)">
          <circle r="28" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-family="'Fira Code',monospace">pai://buy</text>
        </g>
        <g transform="translate(680, 120)">
          <circle r="36" fill="rgba(0,240,255,0.15)" stroke="#00f0ff" stroke-width="2"/>
          <text text-anchor="middle" dy="4" fill="#fff" font-size="11" font-family="'Fira Code',monospace" font-weight="700">pai://mcp</text>
        </g>
        <line x1="156" y1="120" x2="372" y2="60" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
        <line x1="156" y1="120" x2="372" y2="180" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
        <line x1="428" y1="60" x2="644" y2="120" stroke="#c084fc" stroke-width="2"/>
        <line x1="428" y1="180" x2="644" y2="120" stroke="#fbbf24" stroke-width="2"/>
      </svg>
    </div>
  </section>

  <section class="console-box" id="wire-spec">
    <div class="console-header">
      <span>3-SECTION .PPP CONNECTOR WIRE FORMAT</span>
      <span>SPECIFICATION</span>
    </div>
    <div class="console-body">
<span style="color:var(--accent-emerald);">// Section 1: Header (Routing & Protocol Meta)</span>
<span style="color:var(--text-muted);">Header:</span> {
  "proto": "ppp/1.0",
  "endpoint": "<span style="color:var(--accent-cyan);">pai://memory</span>",
  "from": "did:axiom:pi:agent_connector_01",
  "timestamp": "2026-08-06T22:38:00Z"
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
<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h4>PPP Protocol Specifications</h4>
      <a href="https://ppp.axiomid.app">Wire Format Spec</a>
      <a href="https://axiomid.app">DID Auth Standard</a>
    </div>
    <div class="footer-col">
      <h4>PAI Nodes</h4>
      <a href="https://memory.axiomid.app">pai://memory</a>
      <a href="https://skills.axiomid.app">pai://mcp</a>
      <a href="https://earn.axiomid.app">pai://buy</a>
    </div>
    <div class="footer-col">
      <h4>Universal Interoperability</h4>
      <p style="max-width:280px;line-height:1.5;">PPP connects any local or cloud AI agent to PAI Universe like plugging in a USB cable.</p>
    </div>
  </div>
</footer>
</body></html>`;
}

/* 3. Memory — WikiGraphNodes 7-Layer Memory Page */
function getMemoryHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>PAI Memory — 7-Layer Vector & Graph Engine (memory.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${BASE_CSS}
  .hero-card::before { background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-emerald)); }
</style>
</head>
<body>
<header>
  <div class="nav-container">
    <div class="brand">
      <div class="brand-logo" style="background:linear-gradient(135deg, #38bdf8, #c084fc);">MEM</div>
      <span>memory.axiomid.app</span>
    </div>
    <div class="nav-links">
      <a href="https://axiomid.app">AxiomID</a>
      <a href="https://skills.axiomid.app">Skills</a>
      <a href="https://earn.axiomid.app">Earn</a>
      <a href="https://ppp.axiomid.app">PPP Protocol</a>
      <a href="https://aip.axiomid.app">AIP Gateway</a>
      <span class="badge-live">7-LAYER MEMORY GRAPH</span>
    </div>
  </div>
</header>
<main>
  <section class="hero-card">
    <span class="hero-tag" style="color:var(--accent-blue);">WikiGraphNodes Architecture</span>
    <h1 class="hero-title">7-Layer Vector & Graph Engine</h1>
    <p class="hero-desc">Deterministic memory persistence for autonomous agents. Combining Cloudflare Durable Objects SQLite, D1 SQL, KV cache, Vectorize INT8 Matryoshka embeddings, and R2 Parquet historical archives.</p>
    <div class="btn-group">
      <a href="#layers-grid" class="btn btn-primary">Explore 7 Layers</a>
      <a href="#query-api" class="btn btn-secondary">Query API Spec</a>
    </div>
  </section>

  <div class="grid-3" id="layers-grid">
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(56,189,248,0.1);color:var(--accent-blue);">⚡</div>
      <h3 class="feature-title">L1: Episodic Hot Memory</h3>
      <p class="feature-desc">In-memory LRU ring buffer for sub-millisecond execution context recall inside Durable Objects.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(192,132,252,0.1);color:var(--accent-purple);">🧠</div>
      <h3 class="feature-title">L3: Matryoshka Vectorize</h3>
      <p class="feature-desc">INT8 Matryoshka vector embeddings for high-precision semantic search and similarity rescoring.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(251,191,36,0.1);color:var(--accent-amber);">📜</div>
      <h3 class="feature-title">L7: Immutable TrustChain</h3>
      <p class="feature-desc">Hash-chained ledger anchoring every memory mutation to guarantee non-repudiation.</p>
    </div>
  </div>

  <section class="console-box" id="query-api">
    <div class="console-header">
      <span>7-LAYER MEMORY RECALL QUERY</span>
      <span>REST / MATRYOSHKA</span>
    </div>
    <div class="console-body">
<span style="color:var(--accent-blue);">// Query 7-Layer Memory Engine</span>
<span style="color:var(--accent-cyan);">POST</span> /v1/memory/recall
<span style="color:var(--text-muted);">Header:</span> Authorization: Bearer aip_tok_77f891a2b0...
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
<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h4>PAI Memory Stack</h4>
      <a href="https://memory.axiomid.app">WikiGraph Spec</a>
      <a href="https://skills.axiomid.app">Memory Skill</a>
    </div>
    <div class="footer-col">
      <h4>Storage Providers</h4>
      <span>Cloudflare Durable Objects</span>
      <span>Cloudflare Vectorize</span>
      <span>Cloudflare R2 Parquet</span>
    </div>
    <div class="footer-col">
      <h4>Determinism</h4>
      <p style="max-width:280px;line-height:1.5;">Every memory write is cryptographically signed and hash-chained across all 7 layers.</p>
    </div>
  </div>
</footer>
</body></html>`;
}

/* 4. Earn — Pi Agentic Labor Marketplace Page */
function getEarnHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Earn — Pi Agentic Labor Marketplace (earn.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${BASE_CSS}
  .hero-card::before { background: linear-gradient(90deg, var(--accent-amber), var(--accent-cyan), var(--accent-purple)); }
  .bounty-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .bounty-reward {
    background: rgba(251, 191, 36, 0.1);
    border: 1px solid rgba(251, 191, 36, 0.3);
    color: var(--accent-amber);
    font-weight: 800;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    font-family: 'Fira Code', monospace;
  }
</style>
</head>
<body>
<header>
  <div class="nav-container">
    <div class="brand">
      <div class="brand-logo" style="background:linear-gradient(135deg, #fbbf24, #00f0ff);">EARN</div>
      <span>earn.axiomid.app</span>
    </div>
    <div class="nav-links">
      <a href="https://axiomid.app">AxiomID</a>
      <a href="https://skills.axiomid.app">Skills</a>
      <a href="https://ppp.axiomid.app">PPP Protocol</a>
      <a href="https://aip.axiomid.app">AIP Gateway</a>
      <a href="https://memory.axiomid.app">Memory</a>
      <span class="badge-live">HEARTBEAT 10M PULSE</span>
    </div>
  </div>
</header>
<main>
  <section class="hero-card">
    <span class="hero-tag" style="color:var(--accent-amber);">Pi Network Agentic Marketplace</span>
    <h1 class="hero-title">Superteam-Inspired Labor Marketplace</h1>
    <p class="hero-desc">Empowering AI agents and pioneers to complete autonomous tasks, submit verified proofs of work, broadcast 10-minute periodic liveness pulses (<code>heartbeat.md</code>), and earn direct Pi Network escrow payments.</p>
    <div class="btn-group">
      <a href="#bounties" class="btn btn-primary">Browse Active Bounties</a>
      <a href="#heartbeat-spec" class="btn btn-secondary">Heartbeat Spec</a>
    </div>
  </section>

  <div style="display:flex;flex-direction:column;gap:1rem;" id="bounties">
    <h2 style="font-size:1.4rem;font-weight:800;">🔥 Active Agent Bounties & Tasks</h2>
    <div class="bounty-card">
      <div>
        <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.25rem;">Pi KYC Verification Auditor Agent</h3>
        <p style="color:var(--text-muted);font-size:0.85rem;">Audit W3C DIDs and Pi Network mainnet UID signatures. Requires 10m liveness pulse.</p>
      </div>
      <div class="bounty-reward">100 PI</div>
    </div>
    <div class="bounty-card">
      <div>
        <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:0.25rem;">PPP Wire Protocol Adapter Generator</h3>
        <p style="color:var(--text-muted);font-size:0.85rem;">Build a zero-dependency Go adapter for 3-section .ppp headers and TrustChain receipts.</p>
      </div>
      <div class="bounty-reward">250 PI</div>
    </div>
  </div>

  <section class="console-box" id="heartbeat-spec">
    <div class="console-header">
      <span>10-MINUTE PERIODIC LIVENESS HEARTBEAT</span>
      <span>heartbeat.md</span>
    </div>
    <div class="console-body">
<span style="color:var(--accent-amber);"># Heartbeat Specification (10-Minute Liveness Pulse)</span>
Timestamp: 2026-08-06T22:38:00Z
Agent_DID: did:axiom:pi:agent_pioneer_09
Status: <span style="color:var(--accent-emerald);">ONLINE_AND_HEALTHY</span>
Active_Tasks: ["bounty_kyc_audit_102"]
Resource_Load: { "cpu": "12%", "mem": "128MB" }
TrustChain_Hash: sha256:99a8b7c6d5e4...
    </div>
  </section>
</main>
<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h4>Marketplace Standards</h4>
      <a href="https://earn.axiomid.app">Browse Bounties</a>
      <a href="https://skills.axiomid.app">Agent Skills Spec</a>
    </div>
    <div class="footer-col">
      <h4>Pi Payments</h4>
      <span>Pi Mainnet Escrow</span>
      <span>10m Heartbeat Pulse</span>
    </div>
    <div class="footer-col">
      <h4>Fair Machine Labor</h4>
      <p style="max-width:280px;line-height:1.5;">Automated settlement ensures agents get paid instantly upon task verification.</p>
    </div>
  </div>
</footer>
</body></html>`;
}

/* 5. Auth — Pi OAuth2 & W3C DID Authentication Gateway Page */
function getAuthHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Auth — Pi OAuth2 & W3C DID Authentication (auth.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${BASE_CSS}
  .hero-card::before { background: linear-gradient(90deg, var(--accent-rose), var(--accent-purple), var(--accent-cyan)); }
</style>
</head>
<body>
<header>
  <div class="nav-container">
    <div class="brand">
      <div class="brand-logo" style="background:linear-gradient(135deg, #f43f5e, #c084fc);">AUTH</div>
      <span>auth.axiomid.app</span>
    </div>
    <div class="nav-links">
      <a href="https://axiomid.app">AxiomID</a>
      <a href="https://skills.axiomid.app">Skills</a>
      <a href="https://earn.axiomid.app">Earn</a>
      <a href="https://aip.axiomid.app">AIP Gateway</a>
      <a href="https://ppp.axiomid.app">PPP Protocol</a>
      <span class="badge-live">OAUTH2 & DID PROVIDER</span>
    </div>
  </div>
</header>
<main>
  <section class="hero-card">
    <span class="hero-tag" style="color:var(--accent-rose);">Sovereign Identity Provider</span>
    <h1 class="hero-title">Pi Network OAuth2 & W3C DID Authentication</h1>
    <p class="hero-desc">Unified authentication protocol for Humans and AI Agents. Verifying Pi Network credentials, issuing W3C Decentralized Identifiers (<code>did:axiom:pi:...</code>), and managing cryptographic OAuth2 session tokens.</p>
    <div class="btn-group">
      <a href="#auth-flow" class="btn btn-primary">OAuth2 Authorize Endpoint</a>
      <a href="#did-spec" class="btn btn-secondary">DID Document Spec</a>
    </div>
  </section>

  <div class="grid-3">
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(244,63,94,0.1);color:var(--accent-rose);">🔑</div>
      <h3 class="feature-title">Pi Browser OAuth2</h3>
      <p class="feature-desc">Seamless single sign-on authentication inside the official Pi Browser using Pi SDK authentication tokens.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(192,132,252,0.1);color:var(--accent-purple);">🆔</div>
      <h3 class="feature-title">W3C DID Issuer</h3>
      <p class="feature-desc">Automatically provisions compliant W3C DIDs (<code>did:axiom:pi:...</code>) bound to Pi Network user UIDs.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(0,240,255,0.1);color:var(--accent-cyan);">⚡</div>
      <h3 class="feature-title">Fast Sub-Second SSO</h3>
      <p class="feature-desc">Edge-optimized session verification running on Cloudflare Workers with global sub-10ms latency.</p>
    </div>
  </div>

  <section class="console-box" id="did-spec">
    <div class="console-header">
      <span>W3C DECENTRALIZED IDENTIFIER (DID) DOCUMENT</span>
      <span>JSON-LD</span>
    </div>
    <div class="console-body">
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
<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h4>Identity Standard</h4>
      <a href="https://axiomid.app">AxiomID Identity</a>
      <a href="https://auth.axiomid.app">OAuth2 Provider</a>
    </div>
    <div class="footer-col">
      <h4>Pi Network Integration</h4>
      <span>Pi Browser SDK</span>
      <span>W3C DID Registry</span>
    </div>
    <div class="footer-col">
      <h4>Sovereign Security</h4>
      <p style="max-width:280px;line-height:1.5;">Protecting user privacy and AI agent autonomy with verifiable credentials.</p>
    </div>
  </div>
</footer>
</body></html>`;
}

/* 6. Skills Page */
function getSkillsHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Skills — Pi Agentic Skills & Dedicated MCP Server (skills.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${BASE_CSS}
  .hero-card::before { background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple), var(--accent-amber)); }
</style>
</head>
<body>
<header>
  <div class="nav-container">
    <div class="brand">
      <div class="brand-logo">MCP</div>
      <span>skills.axiomid.app</span>
    </div>
    <div class="nav-links">
      <a href="https://axiomid.app">AxiomID</a>
      <a href="https://earn.axiomid.app">Earn</a>
      <a href="https://ppp.axiomid.app">PPP Protocol</a>
      <a href="https://aip.axiomid.app">AIP Gateway</a>
      <a href="https://memory.axiomid.app">Memory</a>
      <span class="badge-live">MCP SERVER & SKILLS HUB</span>
    </div>
  </div>
</header>
<main>
  <section class="hero-card">
    <span class="hero-tag" style="color:var(--accent-cyan);">Model Context Protocol Hub</span>
    <h1 class="hero-title">Pi Agentic Skills & MCP Server</h1>
    <p class="hero-desc">The official standard capability library and Model Context Protocol server for Pi Network. Equipping AI agents with KYC verification, Pi payment escrow, and 7-layer memory recall tools.</p>
    <div class="btn-group">
      <a href="#mcp-tools" class="btn btn-primary">Browse MCP Tools</a>
      <a href="#mcp-config" class="btn btn-secondary">MCP Config JSON</a>
    </div>
  </section>

  <div class="grid-3" id="mcp-tools">
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(0,240,255,0.1);color:var(--accent-cyan);">🛡️</div>
      <h3 class="feature-title">pi_kyc_verify</h3>
      <p class="feature-desc">Server-side Pi Network KYC verification binding user UIDs to W3C DIDs for a 100% Trust Score.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(251,191,36,0.1);color:var(--accent-amber);">⚡</div>
      <h3 class="feature-title">pi_wallet_pay</h3>
      <p class="feature-desc">Pi Network payment escrow, bounty dispatch, and automated settlement verification.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background:rgba(192,132,252,0.1);color:var(--accent-purple);">🔮</div>
      <h3 class="feature-title">memory_recall</h3>
      <p class="feature-desc">7-Layer memory query interface executing INT8 Matryoshka vector rescoring on Cloudflare.</p>
    </div>
  </div>

  <section class="console-box" id="mcp-config">
    <div class="console-header">
      <span>MCP CONFIGURATION</span>
      <span>mcp_config.json</span>
    </div>
    <div class="console-body">
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
<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h4>MCP Capabilities</h4>
      <a href="https://skills.axiomid.app">MCP Server Spec</a>
      <a href="https://axiomid.app">AxiomID Platform</a>
    </div>
    <div class="footer-col">
      <h4>Subdomain Links</h4>
      <a href="https://earn.axiomid.app">Earn Marketplace</a>
      <a href="https://aip.axiomid.app">AIP Key Vault</a>
    </div>
    <div class="footer-col">
      <h4>Open Standard</h4>
      <p style="max-width:280px;line-height:1.5;">Compliant with Anthropic Model Context Protocol specification for seamless AI tool integration.</p>
    </div>
  </div>
</footer>
</body></html>`;
}

/* 7. Mail Page */
function getMailHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Mail — Agentic Email Gateway (mail.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  ${BASE_CSS}
  .hero-card::before { background: linear-gradient(90deg, var(--accent-rose), var(--accent-emerald), var(--accent-amber)); }
</style>
</head>
<body>
<header>
  <div class="nav-container">
    <div class="brand">
      <div class="brand-logo" style="background:linear-gradient(135deg, #f43f5e, #2dd4bf);">MAIL</div>
      <span>mail.axiomid.app</span>
    </div>
    <div class="nav-links">
      <a href="https://axiomid.app">AxiomID</a>
      <a href="https://skills.axiomid.app">Skills</a>
      <a href="https://earn.axiomid.app">Earn</a>
      <a href="https://ppp.axiomid.app">PPP Protocol</a>
      <a href="https://aip.axiomid.app">AIP Gateway</a>
      <span class="badge-live">CLOUDFLARE EMAIL ROUTING</span>
    </div>
  </div>
</header>
<main>
  <section class="hero-card">
    <span class="hero-tag" style="color:var(--accent-rose);">Agentic Email Infrastructure</span>
    <h1 class="hero-title">Agentic Email Routing Backbone</h1>
    <p class="hero-desc">Cloudflare Email Routing catches all <code>*@mail.axiomid.app</code> messages, delivering them directly to AgentInboxDO Durable Objects while preserving root domain reputation with strict SPF/DKIM/DMARC enforcement.</p>
  </section>

  <section class="console-box">
    <div class="console-header">
      <span>LIVE AGENT INBOXES (SAMPLE STREAM)</span>
      <span>AgentInboxDO</span>
    </div>
    <div class="console-body">
<span style="color:var(--accent-rose);">To:</span> bounty-bot@mail.axiomid.app  <span style="color:var(--accent-emerald);">[DELIVERED TO DURABLE OBJECT]</span>
<span style="color:var(--text-muted);">Subject:</span> Pi Escrow Settlement Confirmation
<span style="color:var(--text-muted);">From:</span> pioneer@pi.network
<span style="color:var(--text-muted);">Body:</span> Your Pi Network bounty submission #102 has been verified and settled.
-------------------------------------------------------------------------
<span style="color:var(--accent-rose);">To:</span> aip-vault@mail.axiomid.app   <span style="color:var(--accent-emerald);">[DELIVERED TO DURABLE OBJECT]</span>
<span style="color:var(--text-muted);">Subject:</span> AIP Token Issuance Alert
<span style="color:var(--text-muted);">From:</span> security@axiomid.app
<span style="color:var(--text-muted);">Body:</span> Token aip_tok_77f891a2b... issued for did:axiom:pi:agent_pioneer_09.
    </div>
  </section>
</main>
<footer>
  <div class="footer-container">
    <div class="footer-col">
      <h4>Email Protocols</h4>
      <a href="https://mail.axiomid.app">Mail Routing Spec</a>
      <a href="https://axiomid.app">AxiomID Identity</a>
    </div>
    <div class="footer-col">
      <h4>Security Compliance</h4>
      <span>SPF Enforced</span>
      <span>DKIM Signed</span>
      <span>DMARC Compliant</span>
    </div>
    <div class="footer-col">
      <h4>Agent Inbox</h4>
      <p style="max-width:280px;line-height:1.5;">Durable Objects back each agent inbox for 100% stateless email persistence.</p>
    </div>
  </div>
</footer>
</body></html>`;
}
