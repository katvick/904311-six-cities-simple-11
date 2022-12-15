import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortType } from '../../const';
import { Offer } from '../../types/common';
import { OffersState } from '../../types/state';
import { sortByType } from '../../utils/sort';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersState = {
  city: 'Paris',
  offers: [],
  sort: SortType.POPULAR,
  sortedOffers: [],
  activeOffer: null,
  isOffersLoading: false,
};

export const OffersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: string}>) => {
      state.city = action.payload.city;
    },
    fillListOffer: (state) => {
      state.sortedOffers = state.offers.filter(({city}) => city.name === state.city);
    },
    setActiveOffer: (state, action: PayloadAction<Offer | null>) => {
      state.activeOffer = action.payload;
    },
    changeSort: (state, action: PayloadAction<{sort: string}>) => {
      state.sort = action.payload.sort;
    },
    sortOffers: (state) => {
      state.sortedOffers = sortByType(state.offers, state.sortedOffers, state.sort);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      });
  }
});

export const {changeCity, fillListOffer, setActiveOffer, changeSort, sortOffers} = OffersReducer.actions;
