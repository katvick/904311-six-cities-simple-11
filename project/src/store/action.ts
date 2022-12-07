import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/mocks';

export const changeCity = createAction<{city: string}>('changeCity');

export const fillListOffer = createAction('fillListOffer');

export const changeSort = createAction<{sort: string}>('changeSort');

export const sortOffers = createAction('sortOffers');

export const loadOffers = createAction<Offers>('data/loadOffers');
