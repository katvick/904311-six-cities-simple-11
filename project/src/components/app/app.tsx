import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import RoomPage from '../../pages/room-page/room-page';


type AppProps = {
  countRentOffers: number;
}

function App({countRentOffers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage countRentOffers={countRentOffers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<RoomPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
