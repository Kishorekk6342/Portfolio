// src/main.jsx
import './base.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // or whatever your CSS file is named

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
