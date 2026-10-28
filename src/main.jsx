import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App.jsx';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Global error handlers to ensure no errors are ever silenced
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('[HRU Global Window Error]:', event.error || event.message, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('[HRU Unhandled Promise Rejection]:', event.reason);
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary name="HR University App Root">
      <App />
    </ErrorBoundary>
  </StrictMode>
);
