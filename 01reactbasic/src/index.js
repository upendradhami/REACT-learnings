import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root DOM node (the container where the React app will be mounted)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React app into the root node
root.render(
  // StrictMode helps detect potential problems in an app during development
  <React.StrictMode>
    {/* App component imported from ./App.js */}
    <App />
  </React.StrictMode>
);


