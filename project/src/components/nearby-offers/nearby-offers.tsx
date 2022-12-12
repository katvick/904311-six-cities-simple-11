import { StyleOfferCard } from '../../const';
import { Offers } from '../../types/common';
import ListOffers from '../offers-list/offers-list';

type NearbyOffersProps = {
  nearbyOffers: Offers;
}

function NearbyOffers({nearbyOffers}: NearbyOffersProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <ListOffers
            offers={nearbyOffers}
            styleOfferCard={StyleOfferCard.NearOffer}
          />
        </div>
      </section>
    </div>
  );
}

export default NearbyOffers;
