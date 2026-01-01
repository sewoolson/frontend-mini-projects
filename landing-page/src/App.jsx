import { useState } from 'react'
import './App.css'
import MyDialog from './components/MyDialog.jsx';

function App() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <section style={{ maxWidth: "600px", textAlign: "center" }}>
        <h1>Be Here Now</h1>
        <p>
          A simple landing page built with React and Vite to help you focus on the present moment.
        </p>
        <MyDialog />
      </section>
    </main>
  );
}

export default App;