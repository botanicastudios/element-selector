import React, { useEffect, useState } from 'react';
import './App.css';
import { launchSelector, resetSelectionHighlights } from './element-selector';
import type { ElementInfo, ElementSelectorMode, ElementSelectorTheme } from './element-selector';

// Register a simple shadow-DOM custom element for debugging selection in shadow trees.
const registerShadowCard = () => {
  if (customElements.get('shadow-card')) return;

  class ShadowCard extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
        <style>
          :host {
            display: block;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
            background: linear-gradient(135deg, #0f172a, #1f2937);
            color: #e5e7eb;
            font-family: 'Inter', system-ui, sans-serif;
          }
          .header {
            padding: 16px 18px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .pill {
            padding: 4px 10px;
            border-radius: 999px;
            background: rgba(59,130,246,0.12);
            color: #93c5fd;
            font-size: 12px;
            letter-spacing: 0.02em;
          }
          .body {
            padding: 18px;
            display: grid;
            gap: 12px;
          }
          button {
            background: #3b82f6;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 14px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 6px 16px rgba(59,130,246,0.3);
          }
          button:active {
            transform: translateY(1px);
          }
        </style>
        <div class="header">
          <div class="pill">Shadow DOM</div>
          <div>
            <div style="font-weight:700">Analytics Panel</div>
            <div style="opacity:0.8;font-size:13px">Custom element w/ shadow root</div>
          </div>
        </div>
        <div class="body">
          <div class="metric" aria-label="metric">
            <div style="font-size:13px; opacity:0.8">Conversion</div>
            <div style="font-size:24px; font-weight:700">12.4%</div>
          </div>
          <button type="button">Shadow CTA</button>
          <slot></slot>
        </div>
      `;
    }
  }

  customElements.define('shadow-card', ShadowCard);
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'shadow-card': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function App() {
  const [selectedElements, setSelectedElements] = useState<ElementInfo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  const [friendlySelectors, setFriendlySelectors] = useState(false);
  const [mode, setMode] = useState<ElementSelectorMode>('select');
  const [retainHighlights, setRetainHighlights] = useState(false);
  const [panelTheme, setPanelTheme] = useState<ElementSelectorTheme>('dark');
  const [allowModeToggle, setAllowModeToggle] = useState(true);

  const handleResetHighlights = () => {
    resetSelectionHighlights();
    setSelectedElements(null);
  };

  useEffect(() => {
    registerShadowCard();
  }, []);

  useEffect(() => {
    if (mode === 'insert' && multiSelect) {
      setMultiSelect(false);
    }
  }, [mode, multiSelect]);

  const handleLaunchSelector = async () => {
    setError(null);
    setIsSelecting(true);
    
    try {
      const result = await launchSelector({
        multiSelect: mode === 'select' ? multiSelect : false,
        friendlySelectors,
        mode,
        allowModeToggle,
        retainSelectionHighlights: retainHighlights,
        theme: panelTheme
      });
      // Log the unmodified result so developers can inspect the raw output shape
      console.log('Element selector raw result:', result);
      // Normalize to array for consistent handling in UI
      setSelectedElements(Array.isArray(result) ? result : [result]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsSelecting(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Element Selector Demo</h1>
        <p>Click the button below to launch the element selector</p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          marginTop: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={multiSelect}
              onChange={(e) => setMultiSelect(e.target.checked)}
              disabled={mode === 'insert'}
              style={{
                width: '18px',
                height: '18px',
                cursor: mode === 'insert' ? 'not-allowed' : 'pointer'
              }}
            />
            <span>Multi-select mode</span>
          </label>
          
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={friendlySelectors}
              onChange={(e) => setFriendlySelectors(e.target.checked)}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }}
            />
            <span>Friendly names</span>
          </label>

          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={retainHighlights}
              onChange={(e) => setRetainHighlights(e.target.checked)}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }}
            />
            <span>Retain highlights</span>
          </label>

          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={allowModeToggle}
              onChange={(e) => setAllowModeToggle(e.target.checked)}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }}
            />
            <span>Show select/insert toggle in bar</span>
          </label>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginTop: '14px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontWeight: 600 }}>Options panel theme:</span>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="panel-theme"
              value="dark"
              checked={panelTheme === 'dark'}
              onChange={() => setPanelTheme('dark')}
              style={{ cursor: 'pointer' }}
            />
            <span>Dark</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <input
              type="radio"
              name="panel-theme"
              value="light"
              checked={panelTheme === 'light'}
              onChange={() => setPanelTheme('light')}
              style={{ cursor: 'pointer' }}
            />
            <span>Light</span>
          </label>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginTop: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontWeight: 600 }}>Mode:</span>
          <div style={{
            display: 'flex',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            padding: '4px'
          }}>
            <button
              type="button"
              onClick={() => setMode('select')}
              disabled={mode === 'select'}
              style={{
                border: 'none',
                borderRadius: '999px',
                padding: '6px 16px',
                cursor: mode === 'select' ? 'default' : 'pointer',
                backgroundColor: mode === 'select' ? '#f0f0f0' : 'transparent',
                color: mode === 'select' ? '#1a1a1a' : '#f0f0f0',
                fontWeight: mode === 'select' ? 700 : 500
              }}
            >
              Select
            </button>
            <button
              type="button"
              onClick={() => setMode('insert')}
              disabled={mode === 'insert'}
              style={{
                border: 'none',
                borderRadius: '999px',
                padding: '6px 16px',
                cursor: mode === 'insert' ? 'default' : 'pointer',
                backgroundColor: mode === 'insert' ? '#f0f0f0' : 'transparent',
                color: mode === 'insert' ? '#1a1a1a' : '#f0f0f0',
                fontWeight: mode === 'insert' ? 700 : 500
              }}
            >
              Insert
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={handleLaunchSelector}
            disabled={isSelecting}
            style={{
              fontSize: '18px',
              padding: '12px 24px',
              backgroundColor: '#e6e6e6',
              border: 'none',
              borderRadius: '8px',
              cursor: isSelecting ? 'not-allowed' : 'pointer',
              color: '#1a1a1a',
              fontWeight: 'bold',
              minWidth: '230px'
            }}
          >
            {isSelecting ? 'Selecting...' : 'Launch Element Selector'}
          </button>

          <button
            onClick={handleResetHighlights}
            style={{
              fontSize: '14px',
              padding: '12px 18px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '10px',
              cursor: 'pointer',
              color: '#f8fafc',
              fontWeight: 700,
              backdropFilter: 'blur(4px)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              minWidth: '160px'
            }}
          >
            Reset highlights
          </button>
        </div>

        {error && (
          <div style={{ 
            marginTop: '20px', 
            color: '#ff6b6b',
            padding: '10px',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            borderRadius: '4px'
          }}>
            Error: {error}
          </div>
        )}

        {selectedElements && (
          <div style={{ 
            marginTop: '20px', 
            textAlign: 'left',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '600px'
          }}>
            <h3>Selected Elements ({selectedElements.length}):</h3>
            {selectedElements.map((el, index) => (
              <div 
                key={index} 
                style={{ 
                  marginBottom: '15px',
                  padding: '10px',
                  backgroundColor: 'rgba(97, 218, 251, 0.1)',
                  borderRadius: '4px'
                }}
              >
                <strong>&lt;{el.tag}&gt;</strong>
                {el.id && <span> #{el.id}</span>}
                {el.classes && <span> .{el.classes.split(' ').join('.')}</span>}
                <br />
                <small style={{ color: '#999' }}>Selector: {el.selector}</small>
                {el.mode === 'insert' && el.insertionPosition && (
                  <>
                    <br />
                    <small style={{ color: '#ddd' }}>
                      Insert {el.insertionPosition}
                      {el.insertionAxis ? ` (${el.insertionAxis})` : ''}
                    </small>
                  </>
                )}
                {el.textPreview && (
                  <>
                    <br />
                    <small style={{ color: '#bbb' }}>Text: "{el.textPreview}"</small>
                  </>
                )}
                {(el.src || el.routeId || el.routeFile) && (
                  <>
                    <br />
                    <small style={{ color: '#7dd3fc' }}>
                      ai-src: {el.src || '—'}
                    </small>
                    {el.routeId && (
                      <>
                        <br />
                        <small style={{ color: '#7dd3fc' }}>
                          routeId: {el.routeId}
                        </small>
                      </>
                    )}
                    {el.routeFile && (
                      <>
                        <br />
                        <small style={{ color: '#7dd3fc' }}>
                          routeFile: {el.routeFile}
                        </small>
                      </>
                    )}
                  </>
                )}
                <details style={{ marginTop: '10px' }}>
                  <summary style={{ cursor: 'pointer' }}>HTML context</summary>
                  <div style={{
                    marginTop: '8px',
                    display: 'grid',
                    gap: '8px',
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    fontSize: '12px',
                    backgroundColor: 'rgba(17, 24, 39, 0.6)',
                    padding: '10px',
                    borderRadius: '6px'
                  }}>
                    <div>
                      <strong style={{ color: '#60a5fa' }}>Before</strong>
                      <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{el.beforeHtml || '(none)'}</pre>
                    </div>
                    <div>
                      <strong style={{ color: '#34d399' }}>Element</strong>
                      <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{el.elementHtml || '(none)'}</pre>
                    </div>
                    <div>
                      <strong style={{ color: '#fbbf24' }}>After</strong>
                      <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{el.afterHtml || '(none)'}</pre>
                    </div>
                    {el.mode === 'insert' && (
                      <div>
                        <strong style={{ color: '#f472b6' }}>Insertion Gap</strong>
                        <div style={{ display: 'grid', gap: '4px', marginTop: '4px' }}>
                          <div>
                            <em style={{ color: '#c4b5fd' }}>Before gap</em>
                            <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{el.insertionBeforeHtml || '(none)'}</pre>
                            {(el.beforeSrc || el.beforeRouteId || el.beforeRouteFile) && (
                              <div style={{ color: '#a5b4fc' }}>
                                ai-src: {el.beforeSrc || '—'}
                                {el.beforeRouteId ? ` | routeId: ${el.beforeRouteId}` : ''}
                                {el.beforeRouteFile ? ` | routeFile: ${el.beforeRouteFile}` : ''}
                              </div>
                            )}
                          </div>
                          <div>
                            <em style={{ color: '#c4b5fd' }}>After gap</em>
                            <pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{el.insertionAfterHtml || '(none)'}</pre>
                            {(el.afterSrc || el.afterRouteId || el.afterRouteFile) && (
                              <div style={{ color: '#a5b4fc' }}>
                                ai-src: {el.afterSrc || '—'}
                                {el.afterRouteId ? ` | routeId: ${el.afterRouteId}` : ''}
                                {el.afterRouteFile ? ` | routeFile: ${el.afterRouteFile}` : ''}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </details>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Demo content for selection */}
      <div style={{ padding: '40px' }}>
        <h2>Sample Content</h2>
        <p>This is some sample content you can select.</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px',
          marginTop: '30px'
        }}>
          <div className="card" style={{
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px'
          }}>
            <h3>Card 1</h3>
            <p>This is the first card with some content.</p>
            <button>Action</button>
          </div>
          
          <div className="card" style={{
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px'
          }}>
            <h3>Card 2</h3>
            <p>This is the second card with different content.</p>
            <button>Action</button>
          </div>
          
          <div className="card" style={{
            padding: '20px',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px'
          }}>
            <h3>Card 3</h3>
            <p>This is the third card with more content.</p>
            <button>Action</button>
          </div>
        </div>

        <div style={{ marginTop: '32px', display: 'grid', gap: '12px' }}>
          <h3>Shadow DOM custom element</h3>
          <p style={{ maxWidth: 640 }}>
            The element below is a custom element with its own shadow root. Use it to verify
            hover/selection works inside shadow DOM hosts.
          </p>
          <shadow-card id="shadow-demo" data-test-shadow>
            <div style={{ display: 'grid', gap: '6px' }}>
              <label style={{ fontSize: 13, opacity: 0.85 }}>Shadow input</label>
              <input
                type="text"
                placeholder="Type inside shadow root"
                style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#e5e7eb'
                }}
              />
            </div>
          </shadow-card>
        </div>
        
        <ul style={{ marginTop: '30px', textAlign: 'left' }}>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
