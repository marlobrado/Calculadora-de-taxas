import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Global from './styles/global';
import CalcProvider from './contexts/CalcContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CalcProvider>
            <Global />
            <App />
        </CalcProvider>
    </React.StrictMode>
);


reportWebVitals();
