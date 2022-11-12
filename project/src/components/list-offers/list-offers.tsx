import { useState } from 'react';
import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/mocks';

type ListOffersProps = {
  offers: Offers;
}

function ListOffers({offers}: ListOffersProps): JSX.Element {
  const [ , setOfferMouseOver] = useState(offers[0]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}-${offer.header}`;
        return (
          <article key={keyValue} className="cities__card place-card" onMouseOver={() => {
            setOfferMouseOver(offer);
            // console.log(offerMouseOver);
          }}
          >
            <OfferCard offer={offer} />
          </article>
        );
      })}
    </div>
  );
}

export default ListOffers;
