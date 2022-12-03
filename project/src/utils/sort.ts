import { Offer, Offers } from '../types/mocks';
import { SortType } from '../const';

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
