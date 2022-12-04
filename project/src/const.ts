export enum AppRoute {
  Main = '/',
  Login = '/login',
  OfferCard = '/offer/:id'
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const PropertiesMap = {
  Main: {
    className: 'cities__map',
    height: '980px'
  },
  OfferCard: {
    className: 'property__map',
    height: '579px'
  }
};

export const StyleOfferCard = {
  CityOffer: {
    classArticle: 'cities__card',
    classImageWrapper: 'cities__image-wrapper'
  },
  NearOffer: {
    classArticle: 'near-places__card',
    classImageWrapper: 'near-places__image-wrapper'
  }
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};
