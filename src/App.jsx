import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('Home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} style={{ position: 'absolute', top: 20, right: 20 }}>
        Toggle Theme
      </button>
      <Header setPage={setPage} />
      <MainArea page={page} />
      <Footer />
    </div>
  );
}

export default App;
