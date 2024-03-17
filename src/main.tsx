import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Auth0Provider
        domain="dev-4ej6nxejlnjh2j1l.us.auth0.com"
        clientId="hfbS3Yl7kW6xqObHWMnDhrSqa2KPdBI4"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
    >

    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
