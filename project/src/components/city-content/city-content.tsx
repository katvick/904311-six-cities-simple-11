import { PropertiesMap, StyleOfferCard } from '../../const';
import { useAppSelector } from '../../hooks';
import ListOffers from '../offers-list/offers-list';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

function CityContent(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.sortedOffers);
  const activeSort = useAppSelector((state) => state.sort);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeCity}</b>

          <Sorting sortType={activeSort} />

          <ListOffers offers={offers} styleOfferCard={StyleOfferCard.CityOffer} />

        </section>

        <div className="cities__right-section">
          <Map offers={offers} propertiesMap={PropertiesMap.Main} />
        </div>

      </div>
    </div>
  );
}

export default CityContent;
