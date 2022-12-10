import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer, Offers, Reviews } from '../types/data';
import {
  loadOffers,
  loadReviews,
  setOffersLoadingStatus,
  setSelectedOfferLoadingStatus,
  setNearbyOffersLoadingStatus,
  setReviewsLoadinStatus,
  requireAuthorization,
  loadSelectedOffer,
  loadNearbyOffers,
  fillListOffer,
  redirectToRoute,
  getUserEmail } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
    dispatch(fillListOffer());
  }
);

export const fetchSelectedOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSelectedOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setSelectedOfferLoadingStatus(true));
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setSelectedOfferLoadingStatus(false));
    dispatch(loadSelectedOffer(data));
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setNearbyOffersLoadingStatus(true));
    const {data} = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearbyOffersLoadingStatus(false));
    dispatch(loadNearbyOffers(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadinStatus(true));
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(setReviewsLoadinStatus(false));
    dispatch(loadReviews(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getUserEmail(email));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
