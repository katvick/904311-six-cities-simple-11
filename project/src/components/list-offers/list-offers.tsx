import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/mocks';

type ListOffersProps = {
  offers: Offers;
}

function ListOffers({offers}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = `${offer.id}-${offer.header}`;
        return (
          <article key={keyValue} className="cities__card place-card" onFocus={() => {
            // setOfferOnFocus(offer.id);
            // // console.log(offerOnFocus);
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
