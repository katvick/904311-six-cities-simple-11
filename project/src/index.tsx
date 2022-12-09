import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMesage from './components/error-mesage/error-mesage';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMesage />
      <App />
    </Provider>
  </React.StrictMode>,
);
