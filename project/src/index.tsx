import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { city } from './mocks/city';
import { store } from './store';

const Setting = {
  CountRentOffers: 10
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        countRentOffers = {Setting.CountRentOffers}
        offers = {offers}
        city = {city}
      />
    </Provider>
  </React.StrictMode>,
);
