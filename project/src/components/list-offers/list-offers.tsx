import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/mocks';

type ListOffersProps = {
  offers: Offers;
  onListOffersHover: (listOfferId: number | null) => void;
}

function ListOffers({offers, onListOffersHover}: ListOffersProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  onListOffersHover(activeCard);

  return (
    <div className="cities__places-list places__list tabs__content" data-active-card={activeCard}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
}

export default ListOffers;
