import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Layout } from './layouts/Layouts';
import './index.css'
// import MainLayout from './layouts/MainLayout.jsx'
// import AdminLayout from './layouts/AdminLayout.jsx'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App/>
   <SpeedInsights />
  </React.StrictMode>,
)
