import { createAction } from '@reduxjs/toolkit';
import { Offer, Offers, Reviews } from '../types/data';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction<{city: string}>('offers/changeCity');

export const fillListOffer = createAction('offers/fillListOffer');
export const setActiveOffer = createAction<Offer | null>('offers/setActiveOffer');

export const changeSort = createAction<{sort: string}>('offers/changeSort');
export const sortOffers = createAction('offers/sortOffers');

export const loadOffers = createAction<Offers>('offers/loadOffers');
export const loadNearbyOffers = createAction<Offers>('offer/loadNearbyOffers');
export const loadSelectedOffer = createAction<Offer | null>('offer/loadSelectedOffer');
export const loadReviews = createAction<Reviews>('offer/loadReviews');

export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
export const setSelectedOfferLoadingStatus = createAction<boolean>('offer/setSelectedOfferLoadingStatus');
export const setNearbyOffersLoadingStatus = createAction<boolean>('offer/setNearbyOffersLoadingStatus');
export const setReviewsLoadinStatus = createAction<boolean>('offer/setReviewsLoadinStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const getUserEmail = createAction<string>('user/getUserEmail');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
