import React, { useEffect, useState } from "react";
import "./App.css";
import { launchSelector, resetSelectionHighlights } from "./element-selector";
import type {
  ElementSelectorMode,
  ElementSelectorTheme,
  SelectionResult,
} from "./element-selector";
import { ShadowHitTestPage } from "./ShadowHitTestPage";
import { StandaloneDemo } from "./StandaloneDemo";

// Register nested shadow-DOM custom elements that project children through slots.
const registerNestedCustomElements = () => {
  if (!customElements.get("analytics-shell")) {
    class AnalyticsShell extends HTMLElement {
      constructor() {
        super();
        const root = this.attachShadow({ mode: "open" });
        root.innerHTML = `
          <style>
            :host {
              display: block;
              border-radius: 14px;
              overflow: hidden;
              background: radial-gradient(circle at 10% 20%, rgba(59,130,246,0.3), rgba(59,130,246,0) 35%),
                radial-gradient(circle at 90% 10%, rgba(236,72,153,0.28), rgba(236,72,153,0) 34%),
                linear-gradient(135deg, #0f172a, #0b1324 65%, #0a0f1f);
              color: #e5e7eb;
              box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
              font-family: 'Inter', system-ui, sans-serif;
              border: 1px solid rgba(255, 255, 255, 0.06);
            }
            .shell {
              display: grid;
              gap: 14px;
              padding: 18px 20px 20px;
            }
            .header {
              display: flex;
              align-items: center;
              gap: 12px;
              padding-bottom: 8px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
            .badge {
              padding: 6px 10px;
              border-radius: 999px;
              background: rgba(34,197,94,0.14);
              color: #6ee7b7;
              font-size: 12px;
              letter-spacing: 0.02em;
            }
            .title { font-weight: 700; font-size: 17px; }
            .subtitle { opacity: 0.78; font-size: 13px; }
            .grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 12px;
            }
          </style>
          <div class="shell">
            <div class="header">
              <div class="badge"><slot name="badge">Nested DOM</slot></div>
              <div>
                <div class="title"><slot name="title">Analytics shell</slot></div>
                <div class="subtitle"><slot name="subtitle">Slot projection across hosts</slot></div>
              </div>
            </div>
            <div class="grid">
              <slot></slot>
            </div>
          </div>
        `;
      }
    }

    customElements.define("analytics-shell", AnalyticsShell);
  }

  if (!customElements.get("metric-card")) {
    class MetricCard extends HTMLElement {
      constructor() {
        super();
        const root = this.attachShadow({ mode: "open" });
        root.innerHTML = `
          <style>
            :host {
              display: block;
            }
            .card {
              background: rgba(255, 255, 255, 0.06);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 12px;
              padding: 14px 16px;
              display: grid;
              gap: 8px;
              box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
            }
            .label { font-size: 12px; opacity: 0.82; letter-spacing: 0.02em; }
            .value { font-size: 26px; font-weight: 700; }
            .footer { font-size: 12px; opacity: 0.7; display: flex; gap: 6px; align-items: center; }
            .input { display: grid; gap: 4px; }
            ::slotted(input), ::slotted(select), ::slotted(textarea) {
              padding: 10px 12px;
              border-radius: 8px;
              border: 1px solid rgba(255,255,255,0.16);
              background: rgba(15,23,42,0.65);
              color: #e5e7eb;
              font-weight: 600;
            }
          </style>
          <div class="card">
            <div class="label"><slot name="label">Metric</slot></div>
            <div class="value"><slot>—</slot></div>
            <div class="input"><slot name="input"></slot></div>
            <div class="footer"><slot name="footer"></slot></div>
          </div>
        `;
      }
    }

    customElements.define("metric-card", MetricCard);
  }
};

// Register slot-only paragraph elements to mirror Polaris-style slot markup.
const registerParagraphElements = () => {
  const defineParagraph = (tag: string) => {
    if (customElements.get(tag)) return;

    class SlotParagraph extends HTMLElement {
      constructor() {
        super();
        const root = this.attachShadow({ mode: "open" });
        root.innerHTML = `
          <style>
            :host {
              display: block;
            }
            p.paragraph {
              margin: 0;
              line-height: 1.55;
              color: #e5e7eb;
              font-size: 16px;
              padding: 4px 0;
            }
          </style>
          <p class="paragraph color-base tone-auto font-variant-numeric-auto">
            <slot></slot>
          </p>
        `;
      }
    }

    customElements.define(tag, SlotParagraph);
  };

  defineParagraph("custom-paragraph");
  defineParagraph("s-paragraph");
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "analytics-shell": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "metric-card": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "custom-paragraph": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "s-paragraph": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function DemoApp() {
  const [selectedElements, setSelectedElements] = useState<
    SelectionResult[] | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  const [friendlySelectors, setFriendlySelectors] = useState(false);
  const [mode, setMode] = useState<ElementSelectorMode>("select");
  const [retainHighlights, setRetainHighlights] = useState(false);
  const [panelTheme, setPanelTheme] = useState<ElementSelectorTheme>("dark");
  const [allowModeToggle, setAllowModeToggle] = useState(true);
  const [lassoEnabled, setLassoEnabled] = useState(true);

  const handleResetHighlights = () => {
    resetSelectionHighlights();
    setSelectedElements(null);
  };

  useEffect(() => {
    registerNestedCustomElements();
    registerParagraphElements();
  }, []);

  useEffect(() => {
    if (mode === "insert" && multiSelect) {
      setMultiSelect(false);
    }
  }, [mode, multiSelect]);

  useEffect(() => {
    if (!lassoEnabled && mode === "lasso") {
      setMode("select");
    }
  }, [lassoEnabled, mode]);

  const handleLaunchSelector = async () => {
    setError(null);
    setIsSelecting(true);

    try {
      const result = await launchSelector({
        multiSelect: mode === "select" ? multiSelect : false,
        friendlySelectors,
        mode,
        allowModeToggle,
        lasso: lassoEnabled,
        retainSelectionHighlights: retainHighlights,
        theme: panelTheme,
        debug: true,
      });
      // Log the unmodified result so developers can inspect the raw output shape
      console.log("Element selector raw result:", result);
      // Normalize to array for consistent handling in UI
      setSelectedElements(Array.isArray(result) ? result : [result]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsSelecting(false);
    }
  };

  const modeOptions: Array<{ label: string; value: ElementSelectorMode }> = [
    { label: "Select", value: "select" },
    { label: "Insert", value: "insert" },
  ];

  if (lassoEnabled) {
    modeOptions.push({ label: "Lasso", value: "lasso" });
  }

  const totalModes = modeOptions.length;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Element Selector Demo</h1>
        <p>Click the button below to launch the element selector</p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={multiSelect}
              onChange={(e) => setMultiSelect(e.target.checked)}
              disabled={mode === "insert"}
              style={{
                width: "18px",
                height: "18px",
                cursor: mode === "insert" ? "not-allowed" : "pointer",
              }}
            />
            <span>Multi-select mode</span>
          </label>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={friendlySelectors}
              onChange={(e) => setFriendlySelectors(e.target.checked)}
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            />
            <span>Friendly names</span>
          </label>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={retainHighlights}
              onChange={(e) => setRetainHighlights(e.target.checked)}
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            />
            <span>Retain highlights</span>
          </label>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={allowModeToggle}
              onChange={(e) => setAllowModeToggle(e.target.checked)}
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            />
            <span>Show mode toggle in bar</span>
          </label>

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={lassoEnabled}
              onChange={(e) => setLassoEnabled(e.target.checked)}
              style={{
                width: "18px",
                height: "18px",
                cursor: "pointer",
              }}
            />
            <span>Enable lasso selection</span>
          </label>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginTop: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontWeight: 600 }}>Options panel theme:</span>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="panel-theme"
              value="dark"
              checked={panelTheme === "dark"}
              onChange={() => setPanelTheme("dark")}
              style={{ cursor: "pointer" }}
            />
            <span>Dark</span>
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="panel-theme"
              value="light"
              checked={panelTheme === "light"}
              onChange={() => setPanelTheme("light")}
              style={{ cursor: "pointer" }}
            />
            <span>Light</span>
          </label>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontWeight: 600 }}>Mode:</span>
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "999px",
              padding: "4px",
            }}
          >
            {modeOptions.map((option, index) => {
              const isActive = mode === option.value;
              const borderRadius =
                totalModes === 1
                  ? "999px"
                  : index === 0
                  ? "999px 0 0 999px"
                  : index === totalModes - 1
                  ? "0 999px 999px 0"
                  : "0";

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setMode(option.value)}
                  disabled={isActive}
                  style={{
                    border: "none",
                    borderRadius,
                    padding: "6px 16px",
                    cursor: isActive ? "default" : "pointer",
                    backgroundColor: isActive ? "#f0f0f0" : "transparent",
                    color: isActive ? "#1a1a1a" : "#f0f0f0",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "14px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleLaunchSelector}
            disabled={isSelecting}
            style={{
              fontSize: "18px",
              padding: "12px 24px",
              backgroundColor: "#e6e6e6",
              border: "none",
              borderRadius: "8px",
              cursor: isSelecting ? "not-allowed" : "pointer",
              color: "#1a1a1a",
              fontWeight: "bold",
              minWidth: "230px",
            }}
          >
            {isSelecting ? "Selecting..." : "Launch Element Selector"}
          </button>

          <button
            onClick={handleResetHighlights}
            style={{
              fontSize: "14px",
              padding: "12px 18px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: "10px",
              cursor: "pointer",
              color: "#f8fafc",
              fontWeight: 700,
              backdropFilter: "blur(4px)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              minWidth: "160px",
            }}
          >
            Reset highlights
          </button>
        </div>

        {error && (
          <div
            style={{
              marginTop: "20px",
              color: "#ff6b6b",
              padding: "10px",
              backgroundColor: "rgba(255, 107, 107, 0.1)",
              borderRadius: "4px",
            }}
          >
            Error: {error}
          </div>
        )}

        {selectedElements && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "left",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "600px",
            }}
          >
            <h3>Selected Elements ({selectedElements.length}):</h3>
            {selectedElements.map((el, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  backgroundColor: "rgba(97, 218, 251, 0.1)",
                  borderRadius: "4px",
                }}
              >
                {el.mode === "select" ? (
                  <>
                    <strong>&lt;{el.selectedElementTag}&gt;</strong>
                    {el.selectedElementId && <span> #{el.selectedElementId}</span>}
                    {el.selectedElementClasses && (
                      <span> .{el.selectedElementClasses.split(" ").join(".")}</span>
                    )}
                    <br />
                    <small style={{ color: "#999" }}>
                      Selector: {el.selectedElementSelector}
                    </small>
                    {el.selectedElementTextPreview && (
                      <>
                        <br />
                        <small style={{ color: "#bbb" }}>
                          Text: "{el.selectedElementTextPreview}"
                        </small>
                      </>
                    )}
                    {(el.selectedSrc || el.selectedRouteId || el.selectedRouteFile) && (
                      <>
                        <br />
                        <small style={{ color: "#7dd3fc" }}>
                          ai-src: {el.selectedSrc || "—"}
                        </small>
                        {el.selectedRouteId && (
                          <>
                            <br />
                            <small style={{ color: "#7dd3fc" }}>
                              routeId: {el.selectedRouteId}
                            </small>
                          </>
                        )}
                        {el.selectedRouteFile && (
                          <>
                            <br />
                            <small style={{ color: "#7dd3fc" }}>
                              routeFile: {el.selectedRouteFile}
                            </small>
                          </>
                        )}
                      </>
                    )}
                    <details style={{ marginTop: "10px" }}>
                      <summary style={{ cursor: "pointer" }}>HTML context</summary>
                      <div
                        style={{
                          marginTop: "8px",
                          display: "grid",
                          gap: "8px",
                          fontFamily:
                            "ui-monospace, SFMono-Regular, Menlo, monospace",
                          fontSize: "12px",
                          backgroundColor: "rgba(17, 24, 39, 0.6)",
                          padding: "10px",
                          borderRadius: "6px",
                        }}
                      >
                        <div>
                          <strong style={{ color: "#60a5fa" }}>Before</strong>
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                            {el.htmlBefore || "(none)"}
                          </pre>
                        </div>
                        <div>
                          <strong style={{ color: "#34d399" }}>Element</strong>
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                            {el.selectedElementHtml || "(none)"}
                          </pre>
                        </div>
                        <div>
                          <strong style={{ color: "#fbbf24" }}>After</strong>
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                            {el.htmlAfter || "(none)"}
                          </pre>
                        </div>
                      </div>
                    </details>
                  </>
                ) : (
                  <>
                    <strong>Insert context</strong>
                    <details style={{ marginTop: "10px" }}>
                      <summary style={{ cursor: "pointer" }}>HTML gap</summary>
                      <div
                        style={{
                          marginTop: "8px",
                          display: "grid",
                          gap: "8px",
                          fontFamily:
                            "ui-monospace, SFMono-Regular, Menlo, monospace",
                          fontSize: "12px",
                          backgroundColor: "rgba(17, 24, 39, 0.6)",
                          padding: "10px",
                          borderRadius: "6px",
                        }}
                      >
                        <div>
                          <strong style={{ color: "#60a5fa" }}>Before</strong>
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                            {el.htmlBefore || "(none)"}
                          </pre>
                        </div>
                        <div>
                          <strong style={{ color: "#fbbf24" }}>After</strong>
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                            {el.htmlAfter || "(none)"}
                          </pre>
                        </div>
                        <div>
                          <strong style={{ color: "#f472b6" }}>With marker</strong>
                          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                            {el.htmlWithMarker || "(none)"}
                          </pre>
                        </div>
                      </div>
                    </details>
                    <div style={{ marginTop: "10px", color: "#a5b4fc" }}>
                      <div>
                        <strong>Before element</strong>
                        <div>
                          {el.elementBeforeSelector || "(none)"}
                        </div>
                        {el.srcBefore && <div>ai-src: {el.srcBefore}</div>}
                        {el.routeIdBefore && <div>routeId: {el.routeIdBefore}</div>}
                        {el.routeFileBefore && <div>routeFile: {el.routeFileBefore}</div>}
                      </div>
                      <div style={{ marginTop: "8px" }}>
                        <strong>After element</strong>
                        <div>
                          {el.elementAfterSelector || "(none)"}
                        </div>
                        {el.srcAfter && <div>ai-src: {el.srcAfter}</div>}
                        {el.routeIdAfter && <div>routeId: {el.routeIdAfter}</div>}
                        {el.routeFileAfter && <div>routeFile: {el.routeFileAfter}</div>}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Demo content for selection */}
      <div style={{ padding: "40px" }}>
        <h2>Sample Content</h2>
        <p>This is some sample content you can select.</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            className="card"
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <h3>Card 1</h3>
            <p>This is the first card with some content.</p>
            <button>Action</button>
          </div>

          <div
            className="card"
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <h3>Card 2</h3>
            <p>This is the second card with different content.</p>
            <button>Action</button>
          </div>

          <div
            className="card"
            style={{
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
            }}
          >
            <h3>Card 3</h3>
            <p>This is the third card with more content.</p>
            <button>Action</button>
          </div>
        </div>

        <div style={{ marginTop: "32px", display: "grid", gap: "12px" }}>
          <h3>Nested custom elements with slots</h3>
          <p style={{ maxWidth: 720 }}>
            The block below nests two shadow-hosting custom elements. The outer
            shell projects badge/title slots, while each inner metric card has
            its own default, named, and input slots to exercise slotting across
            multiple shadow boundaries.
          </p>

          <analytics-shell id="shadow-demo" data-test-shadow>
            <span slot="badge">Shadow DOM</span>
            <span slot="title">Weekly product signals</span>
            <span slot="subtitle">Slots propagate through nested hosts</span>

            <metric-card>
              <span slot="label">Signups</span>
              <span>1,204</span>
              <small slot="footer">+12% vs last week</small>
            </metric-card>

            <metric-card>
              <span slot="label">Conversion</span>
              <span>3.8%</span>
              <div slot="footer" style={{ display: "flex", gap: "6px" }}>
                <span>CTA:</span>
                <button style={{ padding: "6px 10px" }} type="button">
                  Shadow CTA
                </button>
              </div>
            </metric-card>

            <metric-card>
              <span slot="label">Feedback</span>
              <span>42 notes</span>
              <input
                slot="input"
                type="text"
                placeholder="Add note inside inner shadow root"
                aria-label="feedback-note"
              />
              <small slot="footer">Input is slotted into inner host</small>
            </metric-card>
          </analytics-shell>
        </div>

        <div style={{ marginTop: "32px", display: "grid", gap: "10px" }}>
          <h3>Slot-only custom paragraphs</h3>
          <p style={{ maxWidth: 720 }}>
            These mimic the Polaris markup you shared: the shadow DOM contains
            only a slot. Copying <code>outerHTML</code> of the inner paragraph will
            return the slot placeholder even though text below is visible.
          </p>
          <div style={{ display: "grid", gap: "12px" }}>
            <custom-paragraph data-test-slot-paragraph>
              Plain light-DOM text projected into a slot.
            </custom-paragraph>

            <custom-paragraph data-test-slot-paragraph>
              <span style={{ color: "#7dd3fc" }}>Span child</span> mixed with
              text for assignment testing.
            </custom-paragraph>

            <custom-paragraph data-test-slot-paragraph>
              <strong>Bold start</strong> and <em style={{ color: "#c4b5fd" }}>
                emphasis
              </em>{" "}
              to show multiple assigned nodes.
            </custom-paragraph>

            <custom-paragraph data-test-slot-paragraph>
              <a href="#" style={{ color: "#f472b6" }}>Link</a> plus trailing
              text and <code>&lt;span&gt;</code> to mirror mixed content.
            </custom-paragraph>

            <s-paragraph data-test-slot-paragraph>
              Shopify-style host name; inspect its shadow root then copy the
              inner <code>&lt;p&gt;</code> to see <code>&lt;slot&gt;</code> preserved.
            </s-paragraph>

            <s-paragraph data-test-slot-paragraph>
              <em>Second</em> example with inline formatting for assigned nodes.
            </s-paragraph>
          </div>
        </div>

        <ul style={{ marginTop: "30px", textAlign: "left" }}>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  if (
    typeof window !== "undefined" &&
    window.location.pathname === "/shadow-hit-test"
  ) {
    return <ShadowHitTestPage />;
  }
  if (typeof window !== "undefined" && window.location.pathname === "/standalone-demo") {
    return <StandaloneDemo />;
  }
  return <DemoApp />;
}
