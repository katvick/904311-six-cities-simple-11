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
  getUserInfo,
  getUserInfoLoadinStatus, } from './action';
import { sortByType } from '../utils/sort';
import { AuthorizationStatus, SortType } from '../const';
import { Offer, Offers, Reviews } from '../types/common';
import { AuthInfo } from '../types/user-data';

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
  userInfo: AuthInfo | null;
  isUserInfoLoading: boolean;
  isOffersLoading: boolean;
  isSelectedOfferLoading: boolean;
  isNearbyOffersLoading: boolean;
  isReviewsLoading: boolean;
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
  userInfo: null,
  isUserInfoLoading: false,
  isOffersLoading: false,
  isSelectedOfferLoading: false,
  isNearbyOffersLoading: false,
  isReviewsLoading: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(getUserInfoLoadinStatus, (state, action) => {
      state.isUserInfoLoading = action.payload;
    });
});

export {reducer};

