import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import ListReviews from '../../components/list-reviews/list-reviews';
import FormReview from '../../components/form-review/form-review';
import Map from '../../components/map/map';
import ListOffers from '../../components/list-offers/list-offers';

import { PropertiesMap, StyleOfferCard } from '../../const';
import { Offers, City, Offer } from '../../types/mocks';


type OfferCardPageProps = {
  offers: Offers;
  city: City;
}

function OfferCardPage({offers, city}: OfferCardPageProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const params = useParams();
  const offer = offers.find((item) => String(item.id) === params.id);

  const nearOffers = offers.slice(0, 3);

  const onListOffersHover = (listOfferId: number | null) => {
    const currentOffer = offers.find((item) => item.id === listOfferId);

    setSelectedOffer(currentOffer);
  };

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Offer card</title>
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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer?.photos.map((photo, id) => {
                const keyValue = `${id}-${photo}`;
                return (
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src={photo} alt="Photostudio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer?.premium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.header}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span
                    style={{
                      width: `${offer ? offer.rating / 5 * 100 : ''}%`
                    }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer?.adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer?.householdItems.map((item, id) => {
                    const keyValue = `${id}-${item}`;
                    return (
                      <li key={keyValue} className="property__inside-item">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${offer?.owner.statusPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer?.owner.avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer?.owner.name}
                  </span>
                  <span className="property__user-status">
                    {offer?.owner.statusPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer?.reviews.length}</span></h2>
                <ListReviews offer={offer} />
                <FormReview />
              </section>
            </div>
          </div>
          <Map
            offers={nearOffers}
            city={city}
            propertiesMap={PropertiesMap.OfferCard}
            selectedOffer={selectedOffer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffers
                offers={nearOffers}
                onListOffersHover={onListOffersHover}
                styleOfferCard={StyleOfferCard.NearOffer}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferCardPage;
