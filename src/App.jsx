import React from 'react';

function App() {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      backgroundColor: '#191919', 
      color: '#ffffff', 
      minHeight: '100vh', 
      margin: 0,
      boxSizing: 'border-box'
    }}>
      
      {/* 1. NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 8%', borderBottom: '1px solid #292929' }}>
        <div style={{ fontWeight: 'bold', fontSize: '22px' }}>Tomasz Gajda</div>
        <ul style={{ display: 'flex', listStyleType: 'none', gap: '35px', margin: 0, padding: 0 }}>
          <li><a href="#about" style={{ color: '#aaa', textDecoration: 'none' }}>About me</a></li>
          <li><a href="#skills" style={{ color: '#aaa', textDecoration: 'none' }}>Skills</a></li>
          <li><a href="#projects" style={{ color: '#aaa', textDecoration: 'none' }}>Projects</a></li>
        </ul>
      </nav>

      {/* 2. HERO */}
      <section style={{ padding: '100px 8%', minHeight: '40vh' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Hi, I'm Tomasz Gajda</h1>
        <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '600px' }}>Front-end Developer</p>
      </section>

    </div>
  );
}

export default App;