import { Offer, Offers, Review } from '../types/common';
import { SortType } from '../const';
import dayjs from 'dayjs';

export const sortByType = (offers: Offers, sortedOffers: Offers, sortType: string) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return sortedOffers.sort((offerA: Offer, offerB: Offer) => offerA.price - offerB.price);
    case SortType.PRICE_HIGH_TO_LOW:
      return sortedOffers.sort((offerA: Offer, offerB: Offer) => offerB.price - offerA.price);
    case SortType.TOP_RATED_FIRST:
      return sortedOffers.sort((offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};

export const sortByDate = (reviewA: Review, reviewB: Review) => dayjs(reviewB.date).diff(dayjs(reviewA.date));
