import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OfferState } from '../../types/state';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSelectedOfferAction } from '../api-actions';

const initialState: OfferState = {
  selectedOffer: null,
  nearbyOffers: [],
  reviews: [],
  isSelectedOfferLoading: false,
  isNearbyOffersLoading: false,
  isReviewsLoading: false,
};

export const OffersReducer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSelectedOfferAction.pending, (state) => {
        state.isSelectedOfferLoading = true;
      })
      .addCase(fetchSelectedOfferAction.fulfilled, (state, action) => {
        state.selectedOffer = action.payload;
        state.isSelectedOfferLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersLoading = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      });
  }
});
