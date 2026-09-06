---
title: "Mastering MCP Elicitation: Multi-Roundtrip Workflows"
date: 2026-07-18
summary: How to use protocol elicitation patterns to let servers ask agents clarifying questions before executing destructive tools.
tags: MCP, Spec, Agentic AI, Patterns
---

## Introducing Protocol Elicitation

When building autonomous tool integrations, executing actions blindly with missing or ambiguous arguments can lead to unintended consequences (such as dropping tables or sending unscheduled emails).

**MCP Elicitation** provides a standardized protocol pattern enabling a server to request clarification, human confirmation, or supplementary parameters mid-execution.

---

## The Elicitation Flow

```
Agent                  MCP Server               User Interface
  |                        |                         |
  |--- 1. Execute Tool --->|                         |
  |    (missing param)     |                         |
  |                        |--- 2. Request Input --->|
  |<-- 3. Elicit Reply ----|    (Prompt user)        |
  |    "Need confirmation" |                         |
  |                        |<-- 4. Provide Input ----|
  |--- 5. Resume Tool ---->|                         |
  |    (with parameters)   |                         |
  |<-- 6. Tool Result -----|                         |
```

---

## Implementing Elicitation Handlers

When an incoming request is missing required confirmation flags, return an elicitation payload instead of throwing an error:

```typescript
server.tool(
  "delete_production_cluster",
  { clusterId: z.string(), confirmToken: z.string().optional() },
  async ({ clusterId, confirmToken }) => {
    if (!confirmToken) {
      return {
        status: "elicitation_required",
        prompt: `Are you sure you want to permanently delete cluster ${clusterId}? Reply with 'CONFIRM-${clusterId}' to proceed.`,
        requiredField: "confirmToken"
      };
    }

    if (confirmToken !== `CONFIRM-${clusterId}`) {
      throw new Error("Invalid confirmation token provided.");
    }

    await deleteCluster(clusterId);
    return { content: [{ type: "text", text: `Cluster ${clusterId} safely deleted.` }] };
  }
);
```

---

## Key Benefits of Elicitation Patterns

1. **Safety Guardrails:** Prevents accidental invocation of dangerous actions.
2. **Interactive Clarification:** Allows agents to gather missing data without failing the whole execution loop.
3. **Auditability:** Logs user confirmation events directly within the trace.

Elicitation turns fragile automated tooling into robust, human-in-the-loop agentic systems!
