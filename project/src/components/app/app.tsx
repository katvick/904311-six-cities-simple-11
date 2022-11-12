import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferCardPage from '../../pages/offer-card-page/offer-card-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import { Offers } from '../../types/mocks';

type AppProps = {
  countRentOffers: number;
  offers: Offers;
}

function App({countRentOffers, offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage countRentOffers={countRentOffers} offers={offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.OfferCard}
            element={<OfferCardPage offers={offers} />}
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
