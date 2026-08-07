# protocol-stubs — PAI Universe Enterprise Protocol Edge Worker

> The unified Cloudflare Worker serving all `*.axiomid.app` protocol subdomains.

## Subdomains Served

| Subdomain | Purpose |
|-----------|---------|
| `index.axiomid.app` | Central Mirror Directory & Sitemap |
| `aip.axiomid.app` | Axiom Identity Protocol — Zero Raw Keys Security Gateway |
| `ppp.axiomid.app` | USB-like Universal Connector & Wire Format Studio |
| `memory.axiomid.app` | WikiGraphNodes 7-Layer Vector & Graph Engine |
| `earn.axiomid.app` | Pi Network Autonomous Machine Labor Exchange |
| `auth.axiomid.app` | Pi Network OAuth2 & W3C DID Authentication |
| `skills.axiomid.app` | Pi Agentic Skills Registry & MCP Server |
| `mail.axiomid.app` | Cloudflare Email Routing & Resend API Bridge |

## API Endpoints

| Path | Response | Description |
|------|----------|-------------|
| `/health` | JSON | Health check with version & latency |
| `/skill.md` | Markdown | Machine-readable skill registration spec |
| `/heartbeat.md` | Markdown | 10-minute periodic liveness pulse |
| `/v1/bounties` | JSON | Active bounty listings |
| `/mcp` | JSON | MCP server capabilities |
| `/v1/tokens/issue` | JSON | AIP token issuance |
| `/spec.ppp` | Text | PPP wire format example |

## Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Type check
npm run typecheck

# Deploy to Cloudflare
npm run deploy
```

## Security Headers

All responses include:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Architecture

```
Request → Cloudflare Edge → protocol-stubs Worker
                              ├─ /health, /skill.md, /heartbeat.md → API JSON/Markdown
                              ├─ subdomain key lookup → HTML page generator
                              └─ unknown subdomain → 404 page
```

## License

PiOS — Pi Open Source License
