import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from "./store";
import { Provider } from 'react-redux';
import './styles.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
