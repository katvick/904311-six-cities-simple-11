import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/common';
import { StyleOfferCard } from '../../types/properties-style';

type ListOffersProps = {
  offers: Offers;
  styleOfferCard: StyleOfferCard;
}

function ListOffers({offers, styleOfferCard}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} styleOfferCard={styleOfferCard} />
      ))}
    </div>
  );
}

export default ListOffers;
