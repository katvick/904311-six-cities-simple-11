import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/mocks';

export const changeCity = createAction('changeCity', (city: string) => ({ payload: city }));

export const fillListOffer = createAction('fillListOffer', (offers: Offers) => ({ payload: offers }));
