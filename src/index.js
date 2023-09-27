import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';

import global_en from './Translations/en/global.json';
import global_vi from './Translations/vi/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'vi',                              // language to use
  resources: {
    en: {
      global: global_en               // 'common' is our custom namespace
    },
    vi: {
      global: global_vi
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode >
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
