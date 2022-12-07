import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMesage from './components/error-mesage/error-mesage';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMesage />
      <App
        offers = {offers}
        city = {cities[3]}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
);
