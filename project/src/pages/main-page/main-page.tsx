import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';

import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import ListCities from '../../components/list-cities/list-cities';
import SortOptions from '../../components/sort/sort';

import { PropertiesMap, StyleOfferCard } from '../../const';
import Header from '../../components/header/header';
// import { fetchOffersAction } from '../../store/api-actions';
// import { useEffect } from 'react';

function MainPage(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.sortedOffers);
  const activeSort = useAppSelector((state) => state.sort);

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchOffersAction());
  // }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Main</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <ListCities activeCity={activeCity} />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>

              <SortOptions sortType={activeSort} />

              <ListOffers offers={offers} styleOfferCard={StyleOfferCard.CityOffer} />

            </section>

            <div className="cities__right-section">
              <Map offers={offers} propertiesMap={PropertiesMap.Main} />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
