import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  fillListOffer,
  changeSort,
  sortOffers,
  loadOffers,
  loadReviews,
  setDataLoadingStatus,
  requireAuthorization,
  setError,
  setActiveOffer,
  loadSelectedOffer,
  loadNearbyOffers, } from './action';
import { sortByType } from '../utils/sort';
import { AuthorizationStatus, SortType } from '../const';
import { Offer, Offers, Reviews } from '../types/data';

type InitialState = {
  city: string;
  offers: Offers;
  sortedOffers: Offers;
  activeOffer: Offer | null;
  selectedOffer: Offer | null;
  nearbyOffers: Offers;
  reviews: Reviews;
  sort: string;
  authorizationStatus: string;
  isDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  sortedOffers: [],
  activeOffer: null,
  selectedOffer: null,
  nearbyOffers: [],
  reviews: [],
  sort: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillListOffer, (state) => {
      state.sortedOffers = state.offers.filter(({city}) => city.name === state.city);
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
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
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

