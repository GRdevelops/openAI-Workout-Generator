import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './styles/index.css'
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="desengineers.eu.auth0.com"
    clientId="tVVFU2JrlX765GPVnj1JITZPSGONoL2d"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Analytics />
    <App />
  </Auth0Provider>,
)
