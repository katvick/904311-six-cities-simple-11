import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillListOffer, changeSort, sortOffers } from './action';
import { sortByType } from '../utils/sort';
// import { Offers } from '../types/mocks';

// type State = {
//   city: string;
//   offers: Offers | null;
//   sort: string;
// }

const initialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city === 'Paris'),
  sort: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillListOffer, (state) => {
      state.offers = offers.filter((offer) => offer.city === state.city);
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload.sort;
    })
    .addCase(sortOffers, (state) => {
      state.offers = sortByType(state.offers, state.sort);
    });
});

export {reducer};

