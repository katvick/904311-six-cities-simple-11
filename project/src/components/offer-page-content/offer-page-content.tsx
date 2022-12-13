import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/common';
import NearbyOffers from '../nearby-offers/nearby-offers';
import OfferFeatures from '../offer-features/offer-features';

function OfferPageContent(): JSX.Element {
  const offer = useAppSelector((state) => state.selectedOffer) as Offer;
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);

  return (
    <main className="page__main page__main--property">
      <OfferFeatures offer={offer} nearbyOffers={nearbyOffers}/>
      <NearbyOffers nearbyOffers={nearbyOffers}/>
    </main>
  );
}

export default OfferPageContent;
