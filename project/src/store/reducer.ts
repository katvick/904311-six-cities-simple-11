import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../const';
import { offers } from '../mocks/offers';
import { changeCity, fillListOffer } from './action';

const initialState = {
  city: CITIES[0],
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillListOffer, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};

