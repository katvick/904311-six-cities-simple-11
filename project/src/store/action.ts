import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{city: string}>('changeCity');

export const fillListOffer = createAction('fillListOffer');

export const changeSort = createAction<{sort: string}>('changeSort');

export const sortOffers = createAction('sortOffers');
