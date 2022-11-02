import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  countRentOffers: number;
}

function App({countRentOffers}: AppProps): JSX.Element {
  return <MainPage countRentOffers={countRentOffers}/>;
}

export default App;
