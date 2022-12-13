import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Offer, Offers, Reviews } from '../types/common';
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
  getUserInfo,
  getUserInfoLoadinStatus} from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data';
import { AuthInfo, UserData } from '../types/user-data';
import { NewReviewData, ReviewRequestData } from '../types/review';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
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
  'offer/fetchSelectedOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(setSelectedOfferLoadingStatus(true));
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setSelectedOfferLoadingStatus(false));
      dispatch(loadSelectedOffer(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }

  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchNearbyOffers',
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
  'offer/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadinStatus(true));
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(setReviewsLoadinStatus(false));
    dispatch(loadReviews(data));
  }
);

export const sendReviewAction = createAsyncThunk<void, ReviewRequestData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/sendReview',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post<NewReviewData>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    // dispatch(fetchReviewsAction(id));
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
    dispatch(fetchInfoAuthAction());
  },
);

export const fetchInfoAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchInfoAuth',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(getUserInfoLoadinStatus(true));
    try {
      const {data} = await api.get<AuthInfo>(APIRoute.Login);
      dispatch(getUserInfo(data));
    } catch {
      dispatch(getUserInfo(null));
    }
    dispatch(getUserInfoLoadinStatus(false));
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
    dispatch(fetchInfoAuthAction());
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
    dispatch(fetchInfoAuthAction());
  },
);
