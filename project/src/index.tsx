import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
// import { offers } from './mocks/offers';
// import { cities } from './mocks/cities';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offers}
        city = {cities[3]}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
);
