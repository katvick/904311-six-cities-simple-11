import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillListOffer, changeSort, sortOffers, loadOffers } from './action';
import { sortByType } from '../utils/sort';
// import { Offers } from '../types/mocks';

// type State = {
//   city: string;
//   offers: Offers | null;
//   sortedOffers: Offers;
//   sort: string;
// }

const initialState = {
  city: 'Paris',
  offers: offers,
  sortedOffers: offers,
  sort: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillListOffer, (state) => {
      state.sortedOffers = offers.filter((offer) => offer.city === state.city);
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload.sort;
    })
    .addCase(sortOffers, (state) => {
      state.sortedOffers = sortByType(state.offers, state.sortedOffers, state.sort);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};

