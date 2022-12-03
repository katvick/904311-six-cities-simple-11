import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCity, fillListOffer, changeSort, sortOffers } from '../../store/action';

import Logo from '../../components/logo/logo';
import ListOffers from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import ListCities from '../../components/list-cities/list-cities';
import SortOptions from '../../components/sort/sort';

import { Cities, Offer } from '../../types/mocks';
import { PropertiesMap, StyleOfferCard } from '../../const';

type MainPageProps = {
  cities: Cities;
}

function MainPage({cities}: MainPageProps): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const activeSort = useAppSelector((state) => state.sort);

  const dispatch = useAppDispatch();

  const changeCityHandle = (evt: React.MouseEvent<HTMLUListElement>) => {
    const target = evt.target as HTMLLIElement;
    dispatch(changeCity({city: target.innerText}));
    dispatch(fillListOffer());
  };

  const changeSortHandle = (evt: React.MouseEvent<HTMLUListElement>) => {
    const target = evt.target as HTMLLIElement;
    dispatch(changeSort({sort: target.innerText}));
    dispatch(sortOffers());
  };

  const activeCityData = cities.filter((city) => city.title === activeCity)[0];

  //

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const onListOffersHover = (listOfferId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === listOfferId);

    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities. Main</title>
      </Helmet>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <ListCities
          cities={cities}
          activeCity={activeCity}
          changeCityHandle={changeCityHandle}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <SortOptions
                sortType={activeSort}
                changeSortHandle={changeSortHandle}
              />
              <ListOffers
                offers={offers}
                styleOfferCard={StyleOfferCard.CityOffer}
                onListOffersHover={onListOffersHover}
              />
            </section>
            <div className="cities__right-section">
              <Map offers={offers} city={activeCityData} propertiesMap={PropertiesMap.Main} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
