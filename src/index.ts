/**
 * protocol-stubs — PoC stubs for pending protocol subdomains.
 * One worker, five hostnames. Each hostname answers:
 *   GET /          → HTML protocol landing (honest: stub, no fake features)
 *   GET /health    → JSON probe
 * Source of truth: pai-docs/docs/protocols/edge-deployment.md
 */

const PROTOCOLS = {
  aip: {
    name: "AIP — AxiomID Identity Protocol",
    desc: "DID documents, verifiable credentials, token introspection. VC issuance lands here (PoC phase 3).",
    live: ["https://openid.axiomid.app", "https://axiomid.app/api/did-document"],
  },
  auth: {
    name: "Auth — Sign-in & Consent",
    desc: "Pi SDK sign-in, KYC/KYA approval layers, consent flows. Browser-only Pi SDK; audit trails.",
    live: ["https://axiomid.app"],
  },
  earn: {
    name: "Earn — Agentic Labor Marketplace",
    desc: "Self-growing labor marketplace: tasks, bounties, agentic services. Payments via Pi.",
    live: ["https://axiomid.app", "https://mcp.axiomid.app"],
  },
  jobs: {
    name: "Jobs — Tasks & Listings",
    desc: "Agent tasks, job listings, delegation. Feeds the earn marketplace graph.",
    live: ["https://axiomid.app"],
  },
  ppp: {
    name: "PPP — Portable Profile Protocol",
    desc: "Shareable URI for signed, encrypted memory packs. Import/export across platforms.",
    live: ["https://openid.axiomid.app"],
  },
} as const;

export default {
  async fetch(request: Request): Promise<Response> {
    const host = new URL(request.url).hostname;
    const key = host.replace(/\.axiomid\.app$/, "") as keyof typeof PROTOCOLS;
    const proto = PROTOCOLS[key];

    if (!proto) {
      return new Response("not found", { status: 404 });
    }

    if (new URL(request.url).pathname === "/health") {
      return json({ host, protocol: key, status: "stub", version: "0.1.0" });
    }

    return new Response(html(key, proto), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
};

function json(value: unknown): Response {
  return new Response(JSON.stringify(value), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

function html(key: string, proto: { name: string; desc: string; live: string[] }): string {
  const links = proto.live
    .map((u) => `<a href="${u}" target="_blank" rel="noopener">${u}</a>`)
    .join(" · ");
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${proto.name}</title>
<style>
  body{margin:0;font-family:ui-sans-serif,system-ui,sans-serif;background:#0f172a;color:#e2e8f0;
       display:grid;place-items:center;min-height:100vh}
  main{max-width:36rem;padding:2rem;text-align:center}
  h1{font-size:1.5rem;margin:0 0 .75rem;color:#fff}
  p{color:#94a3b8;line-height:1.6}
  .badge{display:inline-block;margin-top:1rem;padding:.25rem .75rem;border-radius:999px;
         background:#172554;color:#93c5fd;font-size:.75rem;letter-spacing:.05em}
  a{color:#22d3ee;text-decoration:none;word-break:break-all}
  a:hover{text-decoration:underline}
  .meta{margin-top:2rem;font-size:.75rem;color:#475569}
</style></head><body>
<main>
  <span class="badge">${key}.axiomid.app · PoC STUB</span>
  <h1>${proto.name}</h1>
  <p>${proto.desc}</p>
  <p>${links}</p>
  <p class="meta">Signed record: did:axiom:issuer · edge-deployment spec · no simulated functionality</p>
</main></body></html>`;
}
