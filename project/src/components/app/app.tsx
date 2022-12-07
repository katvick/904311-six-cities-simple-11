import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferCardPage from '../../pages/offer-card-page/offer-card-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import { City, Cities, Offers } from '../../types/data';

type AppProps = {
  offers: Offers;
  city: City;
  cities: Cities;
}

function App({offers, city, cities}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage cities={cities}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.OfferCard}
            element={<OfferCardPage offers={offers} city={city} />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
