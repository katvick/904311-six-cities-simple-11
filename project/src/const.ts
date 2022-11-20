export enum AppRoute {
  Main = '/',
  Login = '/login',
  OfferCard = '/offer/:id'
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const propertiesMainMap = {
  className: 'cities__map',
  height: '980px'
};

export const propertiesOfferCardMap = {
  className: 'property__map',
  height: '579px'
};
