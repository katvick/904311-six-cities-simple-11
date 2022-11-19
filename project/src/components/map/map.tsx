import { useRef, useEffect } from 'react';
// import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { Offer, Offers, City } from '../../types/mocks';

type MapProps = {
  offers: Offers;
  // selectedOffer: Offer;
  city: City;
}

function Map({offers, city}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  return (
    <div className="cities__right-section"
      style={{height: '980px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
