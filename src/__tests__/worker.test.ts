import { describe, it, expect } from "vitest";
import worker from "../index";

describe("protocol-stubs Edge Worker Suite", () => {
  const SUBDOMAINS = [
    { subdomain: "index", title: "Central Subdomain & Protocol Directory", domain: "index.axiomid.app" },
    { subdomain: "aip", title: "AIP Key Vault & Security Gateway", domain: "aip.axiomid.app" },
    { subdomain: "ppp", title: "USB-Like Universal Agent Connector", domain: "ppp.axiomid.app" },
    { subdomain: "memory", title: "7-Layer Vector & Graph Memory Engine", domain: "memory.axiomid.app" },
    { subdomain: "earn", title: "Autonomous Machine Labor Exchange", domain: "earn.axiomid.app" },
    { subdomain: "auth", title: "Pi Network OAuth2 & W3C DID Issuer", domain: "auth.axiomid.app" },
    { subdomain: "skills", title: "Pi Agentic Skills & Dedicated MCP Server", domain: "skills.axiomid.app" },
    { subdomain: "mail", title: "Agentic Email Routing Backbone", domain: "mail.axiomid.app" },
    { subdomain: "harness", title: "Harness — The Forge", domain: "harness.axiomid.app" },
    { subdomain: "node", title: "Node Port — Agent Node Registry", domain: "node.axiomid.app" },
    { subdomain: "learn", title: "Learn — PAI Protocol Academy", domain: "learn.axiomid.app" },
    { subdomain: "agdp", title: "AGDP — Agentic Gross Domestic Product & Commerce Engine", domain: "agdp.axiomid.app" },
  ];

  describe("Subdomain HTML Routing", () => {
    SUBDOMAINS.forEach(({ subdomain, title, domain }) => {
      it(`should return 200 OK and correct HTML content for ${domain}`, async () => {
        const req = new Request(`https://${domain}/`);
        const res = await worker.fetch(req);

        expect(res.status).toBe(200);
        expect(res.headers.get("Content-Type")).toContain("text/html");

        const body = await res.text();
        expect(body).toContain(title);
        expect(body).toContain(`${subdomain}.axiomid.app`);
      });
    });
  });

  describe("Apex Routing", () => {
    it("should 302 apex browsers to the live Vercel app (middleware-allowlisted anchor)", async () => {
      const req = new Request("https://axiomid.app/", {
        headers: { Accept: "text/html" },
      });
      const res = await worker.fetch(req);

      expect(res.status).toBe(302);
      expect(res.headers.get("Location")).toBe("https://axiomid-app-axiom-id.vercel.app/");
    });

    it("should keep serving JSON to apex agents (content negotiation unchanged)", async () => {
      const req = new Request("https://axiomid.app/", {
        headers: { Accept: "application/json" },
      });
      const res = await worker.fetch(req);

      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("application/json");
      const json = await res.json() as Record<string, unknown>;
      expect(json.protocol).toBe("axiomid.app");
    });
  });

  describe("API & Machine-Readable Endpoints", () => {
    it("should serve /health endpoint with JSON diagnostic status", async () => {
      const req = new Request("https://index.axiomid.app/health");
      const res = await worker.fetch(req);

      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("application/json");

      const json = await res.json() as Record<string, unknown>;
      expect(json).toMatchObject({
        host: "index.axiomid.app",
        protocol: "index",
        status: "healthy",
        version: "3.0.0",
      });
      expect(json.timestamp).toBeDefined();
    });

    it("should serve /skill.md endpoint with markdown documentation", async () => {
      const req = new Request("https://earn.axiomid.app/skill.md");
      const res = await worker.fetch(req);

      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("text/markdown");

      const text = await res.text();
      expect(text).toContain("# Pi Autonomous Machine Labor Exchange — Skill Specification");
      expect(text).toContain("PAI-EARN/1.0");
    });

    it("should serve /heartbeat.md endpoint with liveness pulse markdown", async () => {
      const req = new Request("https://earn.axiomid.app/heartbeat.md");
      const res = await worker.fetch(req);

      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("text/markdown");

      const text = await res.text();
      expect(text).toContain("# Pi Autonomous Machine Labor Exchange — 10-Minute Liveness Pulse");
      expect(text).toContain("ONLINE_AND_HEALTHY");
    });

    it("should serve /v1/bounties and /api/bounties JSON payloads", async () => {
      for (const path of ["/v1/bounties", "/api/bounties"]) {
        const req = new Request(`https://earn.axiomid.app${path}`);
        const res = await worker.fetch(req);

        expect(res.status).toBe(200);
        expect(res.headers.get("Content-Type")).toContain("application/json");

const json = await res.json() as { status: string; currency: string; bounties: Array<Record<string, unknown>> };
        expect(json.status).toBe("active");
        expect(json.currency).toBe("PI");
        expect(Array.isArray(json.bounties)).toBe(true);
        expect(json.bounties.length).toBeGreaterThan(0);
        expect(json.bounties[0]).toHaveProperty("id");
      }
    });

    it("should serve /mcp and /v1/mcp server metadata", async () => {
      for (const path of ["/mcp", "/v1/mcp"]) {
        const req = new Request(`https://skills.axiomid.app${path}`);
        const res = await worker.fetch(req);

        expect(res.status).toBe(200);
        expect(res.headers.get("Content-Type")).toContain("application/json");

        const json = await res.json() as { jsonrpc: string; result: { serverInfo: { name: string }; capabilities: { tools: unknown[] } } };
        expect(json.jsonrpc).toBe("2.0");
        expect(json.result.serverInfo.name).toBe("pai-skills-mcp");
        expect(json.result.capabilities.tools).toContain("pi_kyc_verify");
      }
    });

    it("should serve /v1/tokens/issue API endpoint", async () => {
      const req = new Request("https://aip.axiomid.app/v1/tokens/issue");
      const res = await worker.fetch(req);

      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("application/json");

      const json = await res.json() as { status: string; aip_token: string; expires_in: number };
      expect(json.status).toBe("granted");
      expect(json.aip_token).toMatch(/^aip_tok_/);
      expect(json.expires_in).toBe(3600);
    });

    it("should serve /spec.ppp plain text protocol specification", async () => {
      const req = new Request("https://ppp.axiomid.app/spec.ppp");
      const res = await worker.fetch(req);

      expect(res.status).toBe(200);
      expect(res.headers.get("Content-Type")).toContain("text/plain");

      const text = await res.text();
      expect(text).toContain("Header:");
      expect(text).toContain("Body:");
      expect(text).toContain("Receipt:");
    });
  });

  describe("Unknown Subdomains", () => {
    it("should return 404 Not Found for unrecognized subdomain", async () => {
      const req = new Request("https://unknown.axiomid.app/");
      const res = await worker.fetch(req);

      expect(res.status).toBe(404);
      expect(res.headers.get("Content-Type")).toContain("text/html");

      const text = await res.text();
      expect(text).toContain("404 — PAI Universe");
      expect(text).toContain("Unknown protocol subdomain: <strong>unknown.axiomid.app</strong>");
    });
  });

  describe("Security Headers & Preflight Requests", () => {
    it("should include HSTS, frame-ancestors CSP, and nosniff headers on responses", async () => {
      const req = new Request("https://index.axiomid.app/");
      const res = await worker.fetch(req);

      expect(res.headers.get("Strict-Transport-Security")).toBe("max-age=31536000; includeSubDomains");
      expect(res.headers.get("Content-Security-Policy")).toContain("frame-ancestors 'self' https://axiomid.app https://*.axiomid.app");
      expect(res.headers.get("X-Frame-Options")).toBeNull();
      expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
      expect(res.headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
      expect(res.headers.get("Permissions-Policy")).toBe("camera=(), microphone=(), geolocation=()");
    });

    it("should handle OPTIONS preflight requests with 204 No Content and CORS headers", async () => {
      const req = new Request("https://aip.axiomid.app/v1/tokens/issue", {
        method: "OPTIONS",
      });
      const res = await worker.fetch(req);

      expect(res.status).toBe(204);
      expect(res.headers.get("Access-Control-Allow-Origin")).toBe("*");
      expect(res.headers.get("Access-Control-Allow-Methods")).toContain("GET, POST, OPTIONS");
      expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
    });

    it("should route local path fallbacks /harness and /memory for local dev and index host", async () => {
      for (const [path, title] of [
        ["/harness", "Harness — The Forge"],
        ["/memory", "7-Layer Vector & Graph Memory Engine"],
      ] as const) {
        const res = await worker.fetch(new Request(`http://localhost:8787${path}`));
        expect(res.status).toBe(200);
        expect(await res.text()).toContain(title);
      }
    });
  });
});
