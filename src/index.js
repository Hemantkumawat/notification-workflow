import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactFlowPanel from './pages/components/reactFlowPanel';
import MenuPanel from './pages/components/menuPanel';
import './styles/tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="flex h-screen">
<ReactFlowPanel/>
<MenuPanel/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
