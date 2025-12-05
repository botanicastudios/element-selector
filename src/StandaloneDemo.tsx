import React, { useState } from "react";

type StandaloneModule = {
  launchSelector: (opts?: Record<string, unknown>) => Promise<unknown>;
  resetSelectionHighlights: () => void;
};

const formatSelection = (value: unknown) => {
  return JSON.stringify(
    value,
    (_key, v) => {
      if (v instanceof HTMLElement) {
        const tag = v.tagName.toLowerCase();
        const id = v.id ? `#${v.id}` : "";
        return `<${tag}${id}>`;
      }
      if (v instanceof Node) return v.nodeName;
      if (typeof v === "function") return undefined;
      if (v instanceof Map) return Object.fromEntries(v);
      return v;
    },
    2
  );
};

// Dynamically load the standalone bundle. If it isn't built yet, surface a clear message.
async function loadStandalone(): Promise<StandaloneModule> {
  try {
    return await import("../dist/element-selector.standalone.js");
  } catch (err) {
    throw new Error(
      "Standalone bundle not found. Run `npm run build` first to generate dist/element-selector.standalone.js."
    );
  }
}

export function StandaloneDemo() {
  const [status, setStatus] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLaunch = async () => {
    setStatus("Loading standalone bundle...");
    setError(null);
    setResult(null);

    try {
      const { launchSelector, resetSelectionHighlights } = await loadStandalone();
      setStatus("Selecting...");

      resetSelectionHighlights();
      const selection = await launchSelector({
        friendlySelectors: true,
        retainSelectionHighlights: true,
        debug: true,
      });

      setStatus("Done");
      setResult(formatSelection(selection));
    } catch (err) {
      setStatus(null);
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#e2e8f0",
        display: "grid",
        placeItems: "center",
        padding: "32px",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "16px",
          maxWidth: "720px",
          width: "100%",
        }}
      >
        <h1>Standalone selector inside React</h1>
        <p>
          This page loads the <code>/standalone</code> build dynamically, so it works even if the
          hosting React app upgrades independently. If the bundle is missing, run
          <code> npm run build </code> to generate <code>dist/element-selector.standalone.js</code>.
        </p>

        <button
          type="button"
          onClick={handleLaunch}
          disabled={status === "Selecting..."}
          style={{
            padding: "14px 18px",
            background: "#e2e8f0",
            color: "#0f172a",
            borderRadius: "10px",
            border: "1px solid #334155",
            fontWeight: 700,
            cursor: status === "Selecting..." ? "not-allowed" : "pointer",
          }}
        >
          {status === "Selecting..." ? "Selecting..." : "Launch standalone selector"}
        </button>

        {status && <div>Status: {status}</div>}
        {error && <div style={{ color: "#f87171" }}>Error: {error}</div>}
        {result && (
          <pre
            style={{
              background: "#0b1120",
              border: "1px solid #1e293b",
              padding: "12px",
              borderRadius: "12px",
              whiteSpace: "pre-wrap",
            }}
          >
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}

export default StandaloneDemo;
