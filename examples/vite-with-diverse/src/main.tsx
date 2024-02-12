import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="h-screen flex flex-col items-center justify-center gap-6">
      <App />
    </main>
  </React.StrictMode>,
)
