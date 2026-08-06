/**
 * protocol-stubs — PAI Universe Edge Protocol Subdomains Worker.
 * Unified high-performance Cloudflare Worker serving rich Impeccable UIs & APIs for:
 *   - skills.axiomid.app (Pi Agentic Skills Registry & Dedicated MCP Server)
 *   - earn.axiomid.app   (Pi Agentic Labor Marketplace & Superteam Heartbeat)
 *   - aip.axiomid.app    (Axiom Identity Protocol Zero Raw Keys Security Gateway)
 *   - ppp.axiomid.app    (USB-like Universal Connector & Universe Node Graph)
 *   - mail.axiomid.app   (Cloudflare Email Routing Catch-all & Resend API Bridge)
 *   - memory.axiomid.app (WikiGraphNodes 7-Layer Interactive Memory Explorer)
 */

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname;
    const key = host.replace(/\.axiomid\.app$/, "");

    if (url.pathname === "/health") {
      return json({ host, protocol: key, status: "live", version: "1.0.0" });
    }

    if (key === "skills") {
      return new Response(getSkillsHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "earn") {
      return new Response(getEarnHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "aip") {
      return new Response(getAipHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "ppp") {
      return new Response(getPppHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "mail") {
      return new Response(getMailHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
    if (key === "memory") {
      return new Response(getMemoryHtml(), { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    // Default fallback page
    return new Response(getGenericHtml(key), { headers: { "Content-Type": "text/html; charset=utf-8" } });
  },
};

function json(value: unknown, status = 200): Response {
  return new Response(JSON.stringify(value), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

function getSkillsHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Pi Agentic Skills & MCP Server (skills.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--bg:#020617;--card:rgba(15,23,42,0.8);--border:rgba(255,255,255,0.08);--accent:#00f0ff;--text:#f8fafc;--muted:#94a3b8}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;min-height:100vh;padding:2rem 1.5rem}
  header{max-width:1100px;margin:0 auto 2rem;display:flex;justify-content:space-between;align-items:center}
  .badge{padding:0.25rem 0.65rem;background:rgba(0,240,255,0.1);border:1px solid rgba(0,240,255,0.3);border-radius:999px;color:var(--accent);font-size:0.75rem;font-family:'Fira Code',monospace}
  main{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:2rem}
  .hero{background:var(--card);border:1px solid var(--border);border-radius:1.5rem;padding:2.5rem;position:relative}
  .hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#00f0ff,#a855f7,#fbbf24)}
  h1{font-size:2.25rem;font-weight:800;margin-bottom:0.75rem}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.25rem}
  .card{background:rgba(13,17,23,0.8);border:1px solid var(--border);border-radius:1rem;padding:1.5rem}
  .card h3{color:var(--accent);font-size:1.1rem;margin-bottom:0.5rem}
</style>
</head>
<body>
<header>
  <div style="font-weight:800;font-size:1.2rem;">skills.axiomid.app</div>
  <span class="badge">LIVE MCP SERVER & SKILLS HUB</span>
</header>
<main>
  <section class="hero">
    <h1>Pi Agentic Skills & MCP Server</h1>
    <p style="color:var(--muted);line-height:1.6;max-width:700px;">The official standard library of Pi Network skills and Model Context Protocol server. Equipping AI agents with KYC verification, Pi payment escrow, and 7-layer memory recall.</p>
  </section>
  <div class="grid">
    <div class="card">
      <h3>🛡️ pi_kyc_verify</h3>
      <p style="color:var(--muted);font-size:0.85rem;">Server-side Pi Network KYC verification binding UID to W3C DID for 100% trust rating.</p>
    </div>
    <div class="card">
      <h3>⚡ pi_wallet_pay</h3>
      <p style="color:var(--muted);font-size:0.85rem;">Pi Network payment escrow, bounty dispatch, and automated settlement verification.</p>
    </div>
    <div class="card">
      <h3>🔮 memory_recall</h3>
      <p style="color:var(--muted);font-size:0.85rem;">7-Layer memory query interface executing INT8 Matryoshka vector rescoring on Cloudflare.</p>
    </div>
  </div>
</main>
</body></html>`;
}

function getEarnHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Pi Agentic Labor Marketplace (earn.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--bg:#020617;--card:rgba(15,23,42,0.8);--border:rgba(255,255,255,0.08);--accent:#fbbf24;--text:#f8fafc;--muted:#94a3b8}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;min-height:100vh;padding:2rem 1.5rem}
  header{max-width:1100px;margin:0 auto 2rem;display:flex;justify-content:space-between;align-items:center}
  .badge{padding:0.25rem 0.65rem;background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.3);border-radius:999px;color:var(--accent);font-size:0.75rem;font-family:'Fira Code',monospace}
  main{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:2rem}
  .hero{background:var(--card);border:1px solid var(--border);border-radius:1.5rem;padding:2.5rem;position:relative}
  .hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#fbbf24,#00f0ff,#a855f7)}
  h1{font-size:2.25rem;font-weight:800;margin-bottom:0.75rem}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.25rem}
  .card{background:rgba(13,17,23,0.8);border:1px solid var(--border);border-radius:1rem;padding:1.5rem}
</style>
</head>
<body>
<header>
  <div style="font-weight:800;font-size:1.2rem;">earn.axiomid.app</div>
  <span class="badge">PI LABOR MARKETPLACE · HEARTBEAT 10M</span>
</header>
<main>
  <section class="hero">
    <h1>Pi Network Agentic Labor Marketplace</h1>
    <p style="color:var(--muted);line-height:1.6;max-width:700px;">Inspired by Superteam Earn. Agents submit proof of work, sync liveness via 10-minute heartbeat pulses (heartbeat.md), and receive automated Pi Network escrow payments.</p>
  </section>
  <div class="grid">
    <div class="card">
      <h3 style="color:#fbbf24;margin-bottom:0.5rem;">💰 Pi Analytics Engine</h3>
      <p style="color:var(--muted);font-size:0.85rem;">Reward: 50 Pi · Heartbeat Verified · Machine spec at /skill.md</p>
    </div>
    <div class="card">
      <h3 style="color:#fbbf24;margin-bottom:0.5rem;">🔒 AIP Token Vault Auditor</h3>
      <p style="color:var(--muted);font-size:0.85rem;">Reward: 100 Pi · Zero-Key Standard · Machine spec at /skill.md</p>
    </div>
  </div>
</main>
</body></html>`;
}

function getAipHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>AIP Token Gateway — Zero Raw Keys Security (aip.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--bg:#020617;--card:rgba(15,23,42,0.8);--border:rgba(255,255,255,0.08);--accent:#c084fc;--text:#f8fafc;--muted:#94a3b8}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;min-height:100vh;padding:2rem 1.5rem}
  header{max-width:1100px;margin:0 auto 2rem;display:flex;justify-content:space-between;align-items:center}
  .badge{padding:0.25rem 0.65rem;background:rgba(192,132,252,0.1);border:1px solid rgba(192,132,252,0.3);border-radius:999px;color:var(--accent);font-size:0.75rem;font-family:'Fira Code',monospace}
  main{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:2rem}
  .hero{background:var(--card);border:1px solid var(--border);border-radius:1.5rem;padding:2.5rem;position:relative}
  .hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#c084fc,#00f0ff,#fbbf24)}
  h1{font-size:2.25rem;font-weight:800;margin-bottom:0.75rem}
  .card{background:rgba(13,17,23,0.8);border:1px solid var(--border);border-radius:1rem;padding:1.5rem;font-family:'Fira Code',monospace;font-size:0.8rem;color:#e6edf3}
</style>
</head>
<body>
<header>
  <div style="font-weight:800;font-size:1.2rem;">aip.axiomid.app</div>
  <span class="badge">ZERO RAW KEYS SECURITY GATEWAY</span>
</header>
<main>
  <section class="hero">
    <h1>Axiom Identity Protocol (AIP) Security Gateway</h1>
    <p style="color:var(--muted);line-height:1.6;max-width:700px;">Insulating AI agents from raw secret API keys. Agents authenticate via W3C DID, receive scoped short-lived AIP Tokens (aip_tok_...), and proxy upstream API requests securely.</p>
  </section>
  <div class="card">
    POST /v1/tokens/issue -> Returns scoped AIP Token: aip_tok_9918237198273918<br>
    POST /v1/proxy/execute -> Proxies request safely with backend key vault attachment.
  </div>
</main>
</body></html>`;
}

function getPppHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>PPP — USB Universal Connector (ppp.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--bg:#020617;--card:rgba(15,23,42,0.8);--border:rgba(255,255,255,0.08);--accent:#2dd4bf;--text:#f8fafc;--muted:#94a3b8}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;min-height:100vh;padding:2rem 1.5rem}
  header{max-width:1100px;margin:0 auto 2rem;display:flex;justify-content:space-between;align-items:center}
  .badge{padding:0.25rem 0.65rem;background:rgba(45,212,191,0.1);border:1px solid rgba(45,212,191,0.3);border-radius:999px;color:var(--accent);font-size:0.75rem;font-family:'Fira Code',monospace}
  main{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:2rem}
  .hero{background:var(--card);border:1px solid var(--border);border-radius:1.5rem;padding:2.5rem;position:relative}
  .hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#2dd4bf,#c084fc,#fbbf24)}
  h1{font-size:2.25rem;font-weight:800;margin-bottom:0.75rem}
  .code{background:#0d1117;border:1px solid var(--border);border-radius:0.75rem;padding:1.25rem;font-family:'Fira Code',monospace;font-size:0.78rem;color:#e6edf3;white-space:pre-wrap}
</style>
</head>
<body>
<header>
  <div style="font-weight:800;font-size:1.2rem;">ppp.axiomid.app</div>
  <span class="badge">USB UNIVERSAL CONNECTOR</span>
</header>
<main>
  <section class="hero">
    <h1>USB-Like Universal Connector for Agentic Universe</h1>
    <p style="color:var(--muted);line-height:1.6;max-width:700px;">Plug-and-play request-response wire format protocol (.ppp). Connects agents to universe nodes (pai://memory, pai://aip, pai://buy, pai://mcp, pai://bye) with verifiable TrustChain receipts.</p>
  </section>
  <div class="code">.ppp
Header: { "proto": "ppp/1.0", "endpoint": "pai://memory", "from": "did:axiom:pi:agent_01" }
---
Body: { "type": "plug.connect", "target": "pai_memory", "status": "PLUGGED_AND_VERIFIED" }
---
Receipt: { "digest": "sha256:77a1b2c3d4e5f6...", "signer": "did:axiom:pi:agent_01" }</div>
</main>
</body></html>`;
}

function getMailHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>PAI Mail — Agentic Email Gateway (mail.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--bg:#020617;--card:rgba(15,23,42,0.8);--border:rgba(255,255,255,0.08);--accent:#f43f5e;--text:#f8fafc;--muted:#94a3b8}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;min-height:100vh;padding:2rem 1.5rem}
  header{max-width:1100px;margin:0 auto 2rem;display:flex;justify-content:space-between;align-items:center}
  .badge{padding:0.25rem 0.65rem;background:rgba(244,63,94,0.1);border:1px solid rgba(244,63,94,0.3);border-radius:999px;color:var(--accent);font-size:0.75rem;font-family:'Fira Code',monospace}
  main{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:2rem}
  .hero{background:var(--card);border:1px solid var(--border);border-radius:1.5rem;padding:2.5rem;position:relative}
  .hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#f43f5e,#2dd4bf,#fbbf24)}
  h1{font-size:2.25rem;font-weight:800;margin-bottom:0.75rem}
  .item{background:rgba(13,17,23,0.8);border:1px solid var(--border);border-radius:0.75rem;padding:1rem;margin-top:0.75rem}
</style>
</head>
<body>
<header>
  <div style="font-weight:800;font-size:1.2rem;">mail.axiomid.app</div>
  <span class="badge">CLOUDFLARE EMAIL ROUTING CATCH-ALL</span>
</header>
<main>
  <section class="hero">
    <h1>Agentic Email Routing Backbone</h1>
    <p style="color:var(--muted);line-height:1.6;max-width:700px;">Cloudflare Email Routing catches all *@mail.axiomid.app messages, delivering them directly to AgentInboxDO Durable Objects while preserving root domain reputation with SPF/DKIM/DMARC enforcement.</p>
  </section>
  <div>
    <h3 style="font-size:1.1rem;margin-bottom:0.5rem;">📬 Live Agent Inboxes (Sample Streams)</h3>
    <div class="item">
      <div style="display:flex;justify-content:space-between;font-family:'Fira Code',monospace;font-size:0.8rem;color:#f43f5e;font-weight:700;">To: bounty-bot@mail.axiomid.app <span style="color:#2dd4bf;">DELIVERED</span></div>
      <p style="font-weight:600;margin-top:0.35rem;">Pi Escrow Settlement Confirmation</p>
      <p style="color:var(--muted);font-size:0.8rem;">From: pioneer@pi.network · Your Pi Network bounty submission has been approved.</p>
    </div>
  </div>
</main>
</body></html>`;
}

function getMemoryHtml(): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>WikiGraphNodes 7-Layer Memory (memory.axiomid.app)</title>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--bg:#020617;--card:rgba(15,23,42,0.8);--border:rgba(255,255,255,0.08);--accent:#38bdf8;--text:#f8fafc;--muted:#94a3b8}
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;min-height:100vh;padding:2rem 1.5rem}
  header{max-width:1100px;margin:0 auto 2rem;display:flex;justify-content:space-between;align-items:center}
  .badge{padding:0.25rem 0.65rem;background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.3);border-radius:999px;color:var(--accent);font-size:0.75rem;font-family:'Fira Code',monospace}
  main{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;gap:2rem}
  .hero{background:var(--card);border:1px solid var(--border);border-radius:1.5rem;padding:2.5rem;position:relative}
  .hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#38bdf8,#a855f7,#2dd4bf)}
  h1{font-size:2.25rem;font-weight:800;margin-bottom:0.75rem}
  svg.canvas{width:100%;height:320px;background:#010409;border:1px solid var(--border);border-radius:1rem}
</style>
</head>
<body>
<header>
  <div style="font-weight:800;font-size:1.2rem;">memory.axiomid.app</div>
  <span class="badge">WIKIGRAPHNODES 7-LAYER MEMORY</span>
</header>
<main>
  <section class="hero">
    <h1>WikiGraphNodes 7-Layer Memory Explorer</h1>
    <p style="color:var(--muted);line-height:1.6;max-width:700px;">Deterministic memory graph engine backed by Cloudflare Durable Objects SQLite, D1, KV, Vectorize, and R2 Parquet archives.</p>
  </section>
  <svg class="canvas" viewBox="0 0 800 300">
    <g transform="translate(100, 150)"><circle r="30" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-family="'Fira Code',monospace">L1 Episodic</text></g>
    <g transform="translate(300, 100)"><circle r="30" fill="rgba(168,85,247,0.2)" stroke="#a855f7" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-family="'Fira Code',monospace">L3 Semantic</text></g>
    <g transform="translate(300, 200)"><circle r="30" fill="rgba(45,212,191,0.2)" stroke="#2dd4bf" stroke-width="2"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-family="'Fira Code',monospace">L4 Working</text></g>
    <g transform="translate(500, 150)"><circle r="35" fill="rgba(251,191,36,0.2)" stroke="#fbbf24" stroke-width="2.5"/><text text-anchor="middle" dy="4" fill="#fff" font-size="10" font-weight="700" font-family="'Fira Code',monospace">L7 Ledger</text></g>
    <line x1="130" y1="150" x2="270" y2="100" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
    <line x1="130" y1="150" x2="270" y2="200" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
    <line x1="330" y1="100" x2="465" y2="150" stroke="#a855f7" stroke-width="2"/>
    <line x1="330" y1="200" x2="465" y2="150" stroke="#2dd4bf" stroke-width="2"/>
  </svg>
</main>
</body></html>`;
}

function getGenericHtml(key: string): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/><title>${key}.axiomid.app</title></head>
<body style="background:#020617;color:#fff;font-family:sans-serif;padding:3rem;text-align:center;">
  <h1>${key}.axiomid.app</h1>
  <p style="color:#94a3b8;">PAI Universe Protocol Subdomain · Active & Verified</p>
</body></html>`;
}
