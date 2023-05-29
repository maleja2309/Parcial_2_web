import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';

const root = ReactDOM.createRoot(document.getElementById('root'));

var lan = 'es';
var loc = localeEsMessages;

if (navigator.language.toString() != 'es') {

  lan = 'en';
  loc = localeEnMessages;
};
console.log(navigator.language.toString());
root.render(

  <IntlProvider locale={lan} messages={loc}>
    <App />
  </IntlProvider>
  , document.getElementById("root")

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
