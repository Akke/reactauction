import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuctionProvider from './context/AuctionProvider.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AuctionProvider>
          <App />
      </AuctionProvider>
    </AuthProvider>
  </StrictMode>,
)
