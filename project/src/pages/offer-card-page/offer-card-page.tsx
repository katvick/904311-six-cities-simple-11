import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import ListReviews from '../../components/list-reviews/list-reviews';
import Map from '../../components/map/map';
import ListOffers from '../../components/list-offers/list-offers';

import { PropertiesMap, StyleOfferCard } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSelectedOfferAction } from '../../store/api-actions';
import Header from '../../components/header/header';
import LoadingPage from '../loading-page/loading-page';

function OfferCardPage(): JSX.Element {
  const offer = useAppSelector((state) => state.selectedOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const reviews = useAppSelector((state) => state.reviews);

  const checkOfferLoading = useAppSelector((state) => state.isSelectedOfferLoading);
  const checkNearbyOffersLoading = useAppSelector((state) => state.isNearbyOffersLoading);
  const checkReviewsLoading = useAppSelector((state) => state.isReviewsLoading);

  const dispatch = useAppDispatch();

  const {id} = useParams();
  const offerId = Number(id);

  useEffect(() => {
    dispatch(fetchSelectedOfferAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));
    dispatch(fetchReviewsAction(offerId));
  }, [dispatch, offerId]);

  if (checkOfferLoading || checkNearbyOffersLoading || checkReviewsLoading || offer === null) {
    return (
      <LoadingPage />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Offer card</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer?.images.map((image, index) => {
                const keyValue = `${index}-${image}`;
                return (
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photostudio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer?.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
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
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer?.goods.map((item, index) => {
                    const keyValue = `${index}-${item}`;
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
                  <div className={`property__avatar-wrapper ${offer?.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer?.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer?.host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <ListReviews reviews={reviews} />
            </div>
          </div>
          <Map
            offers={nearbyOffers}
            propertiesMap={PropertiesMap.OfferCard}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffers
                offers={nearbyOffers}
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
