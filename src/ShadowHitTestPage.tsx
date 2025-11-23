import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "shadow-hit-card": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

/**
 * Minimal shadow DOM hit-test playground (no element-selector import).
 * - Renders a custom element with an open shadow root containing a button and input.
 * - Logs hit-testing results using composedPath + deep elementFromPoint.
 * - Shows the latest targets on page for quick visual inspection.
 */
export function ShadowHitTestPage() {
  const [hitInfo, setHitInfo] = useState({
    composedPath: "(move your mouse)",
    deepFromPoint: "",
    withinShadow: "",
    coords: "",
  });

  const frameRef = useRef<number | null>(null);

  // One-off custom element registration
  useEffect(() => {
    if (customElements.get("shadow-hit-card")) return;

    class ShadowHitCard extends HTMLElement {
      constructor() {
        super();
        const root = this.attachShadow({ mode: "open" });
        root.innerHTML = `
          <style>
            :host {
              display: block;
              max-width: 420px;
              margin: 32px auto;
              border-radius: 14px;
              overflow: hidden;
              box-shadow: 0 18px 40px rgba(0,0,0,0.18);
              background: linear-gradient(135deg, #0f172a, #1f2937);
              color: #e5e7eb;
              font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
            }
            header {
              padding: 16px 18px;
              border-bottom: 1px solid rgba(255,255,255,0.1);
              display: flex;
              align-items: center;
              gap: 10px;
            }
            .badge {
              background: rgba(74, 222, 128, 0.16);
              color: #4ade80;
              padding: 4px 10px;
              border-radius: 999px;
              font-size: 12px;
              letter-spacing: 0.02em;
            }
            main {
              padding: 18px;
              display: grid;
              gap: 14px;
            }
            button {
              background: #22c55e;
              color: #0c110f;
              border: none;
              border-radius: 10px;
              padding: 10px 14px;
              font-weight: 700;
              cursor: pointer;
              box-shadow: 0 8px 20px rgba(34,197,94,0.32);
            }
            input {
              border-radius: 10px;
              border: 1px solid rgba(255,255,255,0.16);
              background: rgba(255,255,255,0.06);
              color: white;
              padding: 10px 12px;
              font-size: 15px;
              outline: none;
            }
          </style>
          <header>
            <div class="badge">Shadow DOM</div>
            <div>
              <div style="font-weight:700">Hit-test harness</div>
              <div style="opacity:0.8;font-size:13px">Move mouse over these controls</div>
            </div>
          </header>
          <main>
            <button id="shadow-cta" type="button">Shadow CTA</button>
            <input id="shadow-input" placeholder="Type inside shadow" />
            <slot></slot>
          </main>
        `;
      }
    }

    customElements.define("shadow-hit-card", ShadowHitCard);
  }, []);

  // Deep hit-test helper (document + open shadow roots + slots)
  const deepElementFromPoint = useMemo(() => {
    const walk = (root: Document | ShadowRoot, x: number, y: number): HTMLElement | null => {
      const elementFromPoint = (root as any).elementFromPoint as
        | ((cx: number, cy: number) => Element | null)
        | undefined;
      if (!elementFromPoint) return null;

      const hit = elementFromPoint.call(root, x, y) as HTMLElement | null;
      if (!hit) return null;

      if (hit instanceof HTMLSlotElement) {
        const assigned = hit.assignedElements({ flatten: true }) as HTMLElement[];
        const under = assigned.find((el) => {
          const r = el.getBoundingClientRect();
          return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
        }) || assigned[0];
        if (under) {
          return under.shadowRoot ? walk(under.shadowRoot, x, y) ?? under : under;
        }
      }

      if (hit.shadowRoot) {
        const inner = walk(hit.shadowRoot, x, y);
        if (inner) return inner;
      }

      return hit;
    };

    return (x: number, y: number) => walk(document, x, y);
  }, []);

  useEffect(() => {
    const output = (label: string, value: HTMLElement | null) => {
      if (!value) return `${label}: null`;
      const host = value.getRootNode() instanceof ShadowRoot ? (value.getRootNode() as ShadowRoot).host : null;
      return `${label}: <${value.tagName.toLowerCase()}${value.id ? `#${value.id}` : ""}>` +
        (host ? ` (shadow host: <${(host as HTMLElement).tagName.toLowerCase()}>)` : "");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;

        const composed = event.composedPath().find((n) => n instanceof HTMLElement) as
          | HTMLElement
          | undefined;
        const deep = deepElementFromPoint(event.clientX, event.clientY);

        const info = {
          composedPath: output("composedPath[0]", composed ?? null),
          deepFromPoint: output("deepElementFromPoint", deep ?? null),
          withinShadow: deep?.getRootNode() instanceof ShadowRoot ? "yes" : "no",
          coords: `x:${event.clientX}, y:${event.clientY}`,
        };

        // Log for console inspection and mirror to UI
        // eslint-disable-next-line no-console
        console.log("[shadow-hit-test]", info);
        setHitInfo(info);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { capture: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove, { capture: true });
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [deepElementFromPoint]);

  return (
    <div className="App" style={{ padding: "24px" }}>
      <h1>Shadow DOM Hit-Test Harness</h1>
      <p>Visit <code>/shadow-hit-test</code> to debug hit detection inside open shadow roots. No element-selector code runs here.</p>

      <shadow-hit-card>
        <div slot="footer" style={{ color: "#cbd5e1", fontSize: "13px" }}>
          Extra slotted content for slot coverage.
        </div>
      </shadow-hit-card>

      <div style={{ marginTop: "20px", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "10px", background: "#f8fafc", color: "#0f172a", maxWidth: 520 }}>
        <h3 style={{ marginTop: 0 }}>Live hit-test output</h3>
        <div><strong>Composed path:</strong> {hitInfo.composedPath}</div>
        <div><strong>Deep elementFromPoint:</strong> {hitInfo.deepFromPoint}</div>
        <div><strong>Within shadow:</strong> {hitInfo.withinShadow}</div>
        <div><strong>Coords:</strong> {hitInfo.coords}</div>
      </div>
    </div>
  );
}
