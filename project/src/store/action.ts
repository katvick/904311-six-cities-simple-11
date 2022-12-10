import { createAction } from '@reduxjs/toolkit';
import { Offer, Offers, Reviews } from '../types/data';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction<{city: string}>('changeCity');

export const fillListOffer = createAction('fillListOffer');
export const setActiveOffer = createAction<Offer | null>('setActiveOffer');

export const changeSort = createAction<{sort: string}>('changeSort');
export const sortOffers = createAction('sortOffers');

export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');
export const loadSelectedOffer = createAction<Offer | null>('loadSelectedOffer');
export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setUserEmail = createAction<string>('user/setUserEmail');

export const setError = createAction<string | null>('setError');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
