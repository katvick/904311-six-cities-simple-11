import { NameSpace } from '../../const';
import { Offer, Offers } from '../../types/common';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Offers].city;
export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getSort = (state: State): string => state[NameSpace.Offers].sort;
export const getSortedOffers = (state: State): Offers => state[NameSpace.Offers].sortedOffers;
export const getActiveOffer = (state: State): Offer | null => state[NameSpace.Offers].activeOffer;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;
