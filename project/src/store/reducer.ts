import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  fillListOffer,
  changeSort,
  sortOffers,
  loadOffers,
  loadReviews,
  setOffersLoadingStatus,
  setSelectedOfferLoadingStatus,
  setNearbyOffersLoadingStatus,
  setReviewsLoadinStatus,
  requireAuthorization,
  setActiveOffer,
  loadSelectedOffer,
  loadNearbyOffers,
  setFormReviewData,
  getUserEmail, } from './action';
import { sortByType } from '../utils/sort';
import { AuthorizationStatus, SortType } from '../const';
import { Offer, Offers, Reviews, Review } from '../types/common';

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
  userEmail: string | null;
  isOffersLoading: boolean;
  isSelectedOfferLoading: boolean;
  isNearbyOffersLoading: boolean;
  isReviewsLoading: boolean;
  formReviewData: Review | null;
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
  userEmail: null,
  isOffersLoading: false,
  isSelectedOfferLoading: false,
  isNearbyOffersLoading: false,
  isReviewsLoading: false,
  formReviewData: null,
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
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setSelectedOfferLoadingStatus, (state, action) => {
      state.isSelectedOfferLoading = action.payload;
    })
    .addCase(setNearbyOffersLoadingStatus, (state, action) => {
      state.isNearbyOffersLoading = action.payload;
    })
    .addCase(setReviewsLoadinStatus, (state, action) => {
      state.isReviewsLoading = action.payload;
    })
    .addCase(setFormReviewData, (state, action) => {
      state.formReviewData = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export {reducer};

