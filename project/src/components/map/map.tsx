import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { Offer, Offers, City } from '../../types/mocks';
import { PropertiesMap } from '../../types/common';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  offers: Offers;
  city: City;
  propertiesMap: PropertiesMap;
  selectedOffer?: Offer;
}

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

function Map({offers, city, propertiesMap, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.lat, city.lng],
        12
      );
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentIcon
              : defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, city, offers, selectedOffer]);

  return (
    <section className={`${propertiesMap.className} map`}
      style={{height: propertiesMap.height}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
