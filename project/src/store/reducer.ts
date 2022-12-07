import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillListOffer, changeSort, sortOffers, loadOffers, requireAuthorization, setError } from './action';
import { sortByType } from '../utils/sort';
import { AuthorizationStatus } from '../const';
import { Offers } from '../types/data';

type InitialState = {
  city: string;
  offers: Offers;
  sortedOffers: Offers;
  sort: string;
  authorizationStatus: string;
  error: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sortedOffers: [],
  sort: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

