import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { StoreProvider } from './app/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider>
            <App />
        </StoreProvider>
    </React.StrictMode>
);
