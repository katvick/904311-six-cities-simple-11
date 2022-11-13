import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/mocks';

type ListOffersProps = {
  offers: Offers;
}

function ListOffers({offers}: ListOffersProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content" data-active-card={activeCard}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setActiveCard={setActiveCard} />
      ))}
    </div>
  );
}

export default ListOffers;
