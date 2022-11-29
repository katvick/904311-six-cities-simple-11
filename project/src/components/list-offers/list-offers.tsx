import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/mocks';
import { StyleOfferCard } from '../../types/common';

type ListOffersProps = {
  offers: Offers;
  styleOfferCard: StyleOfferCard;
  onListOffersHover: (listOfferId: number | null) => void;
}

function ListOffers({offers, styleOfferCard, onListOffersHover}: ListOffersProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  onListOffersHover(activeCard);

  return (
    <div className="cities__places-list places__list tabs__content" data-active-card={activeCard}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setActiveCard={setActiveCard} styleOfferCard={styleOfferCard} />
      ))}
    </div>
  );
}

export default ListOffers;
