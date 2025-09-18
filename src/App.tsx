import React, { useEffect, useState } from 'react';
import './App.css';
import { launchSelector } from './element-selector';
import type { ElementInfo, ElementSelectorMode } from './element-selector';

function App() {
  const [selectedElements, setSelectedElements] = useState<ElementInfo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  const [friendlySelectors, setFriendlySelectors] = useState(false);
  const [mode, setMode] = useState<ElementSelectorMode>('select');

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
        mode
      });
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
                backgroundColor: mode === 'select' ? '#61dafb' : 'transparent',
                color: mode === 'select' ? '#1b2838' : '#f0f0f0',
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
                backgroundColor: mode === 'insert' ? '#61dafb' : 'transparent',
                color: mode === 'insert' ? '#1b2838' : '#f0f0f0',
                fontWeight: mode === 'insert' ? 700 : 500
              }}
            >
              Insert
            </button>
          </div>
        </div>

        <button
          onClick={handleLaunchSelector}
          disabled={isSelecting}
          style={{
            fontSize: '18px',
            padding: '12px 24px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '8px',
            cursor: isSelecting ? 'not-allowed' : 'pointer',
            color: '#282c34',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          {isSelecting ? 'Selecting...' : 'Launch Element Selector'}
        </button>

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
