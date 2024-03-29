import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from 'components/App/App';
import './index.css';
import './styles/GlobalStyles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
