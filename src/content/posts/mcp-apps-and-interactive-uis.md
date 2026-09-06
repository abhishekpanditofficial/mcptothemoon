---
title: "MCP Apps: Rendering Interactive UI Components in LLM Interfaces"
date: 2026-08-02
summary: Step-by-step guide to delivering rich HTML/JS widgets through MCP response payloads without breaking chat flows.
tags: MCP Apps, Frontend, UI/UX, Tutorial
---

## Beyond Text: Bringing Rich UIs to Model Context Protocol

While Markdown text and structured JSON responses work well for simple tasks, complex workflows—like dataset filtering, inline code editing, or interactive chart inspection—demand full interactive UI components.

**MCP Apps** extend the core protocol to allow servers to return rich HTML/JavaScript mini-applications directly into compliant LLM host clients.

---

## How MCP Apps Work

When a client queries an MCP tool that returns UI content, the server embeds web resources in standard sandboxed `iframe` containers.

```
+-------------------+        1. Call Tool        +-------------------+
|                   | -------------------------> |                   |
|  LLM Client UI    |                            |  MCP Server       |
| (Claude/Desktop)  | <------------------------- |                   |
+-------------------+  2. Return UI Payload + JS +-------------------+
          |
          v
  +---------------+
  |  Sandboxed    |
  |  MCP App Component
  +---------------+
```

---

## 1. Tool Declaration with Embedded Resources

To signal that a tool returns an interactive application view, configure the response schema with the `application/vnd.mcp.app+html` mime-type:

```typescript
server.tool(
  "render_analytics_dashboard",
  { metric: z.string() },
  async ({ metric }) => {
    return {
      content: [
        {
          type: "resource",
          resource: {
            uri: `ui://analytics/${metric}`,
            mimeType: "application/vnd.mcp.app+html",
            text: `
              <!DOCTYPE html>
              <html>
                <head>
                  <style>
                    body { font-family: system-ui; background: #0f172a; color: #fff; padding: 16px; }
                    .card { background: #1e293b; border-radius: 8px; padding: 20px; border: 1px solid #334155; }
                    .metric { font-size: 32px; font-weight: bold; color: #38bdf8; }
                  </style>
                </head>
                <body>
                  <div class="card">
                    <h3>Live Metric: ${metric}</h3>
                    <div class="metric">99.4%</div>
                    <p>Status: Operating within normal parameters.</p>
                  </div>
                </body>
              </html>
            `
          }
        }
      ]
    };
  }
);
```

---

## 2. Best Practices for MCP App Interfaces

1. **Dark & Light Mode Harmony:** Always respect the host system's `prefers-color-scheme` media queries.
2. **Compact & Responsive Layouts:** Keep components tight; aim for maximum utility within 300px - 500px vertical space.
3. **No External Network Leaks:** Bundle scripts inline or serve from verified CDNs to preserve user privacy.

MCP Apps mark a massive step forward in transforming AI chats into true, interactive workspace environments!
