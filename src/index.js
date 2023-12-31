import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { MantineProvider, createTheme } from '@mantine/core';
import reportWebVitals from './reportWebVitals';
// core styles are required for all packages
import './index.css';
import '@mantine/core/styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const mytheme=createTheme({
  primaryColor:'blue'
})
root.render(
  <React.StrictMode>
    <MantineProvider theme={mytheme}>
    <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
