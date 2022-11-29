import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillListOffer } from './action';

const initialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city === 'Paris')
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillListOffer, (state) => {
      state.offers = offers.filter((offer) => offer.city === state.city);
    });
});

export {reducer};

