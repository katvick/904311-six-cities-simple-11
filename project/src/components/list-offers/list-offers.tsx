import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/mocks';

type ListOffersProps = {
  offers: Offers;
}

function ListOffers({offers}: ListOffersProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        const keyValue = offer.id;
        return (
          <OfferCard offer={offer} key={keyValue}/>
        );
      })}
    </div>
  );
}

export default ListOffers;
