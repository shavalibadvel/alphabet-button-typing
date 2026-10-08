import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');


  const handleLetterClick = (letter) => {
    setText((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= 'a' && e.key <= 'z') {
        setText((prev) => prev + e.key.toUpperCase());
      } else if (e.key >= 'A' && e.key <= 'Z') {
        setText((prev) => prev + e.key);
      } else if (e.key === 'Backspace') {
        setText((prev) => prev.slice(0, -1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="app-container">
      <div className="card">
        <h1>Alphabet Buttons</h1>
        <p className="subtitle">Click letters (or use your keyboard) to build text.</p>
        
        <div className="output">
          {text || 'Your text will appear here...'}
        </div>

        <div className="backspace-container">
          <button className="backspace-btn" onClick={handleBackspace}>Backspace</button>
        </div>

        <div className="keyboard-grid">
          {alphabet.map((letter) => (
            <button 
              key={letter} 
              className="key" 
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;