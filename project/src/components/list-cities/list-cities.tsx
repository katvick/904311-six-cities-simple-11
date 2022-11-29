import React from 'react';
import { Cities } from '../../types/mocks';
import CityItem from '../city-item/city-item';

type ListCitiesProps = {
  cities: Cities;
  activeCity: string;
  changeCityHandle: (evt: React.MouseEvent<HTMLUListElement>) => void;
}

function ListCities({cities, activeCity, changeCityHandle}: ListCitiesProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list" onClick={changeCityHandle}>
          {cities.map((city) => (
            <CityItem
              key={city.id}
              city={city.title}
              activeCity={activeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ListCities;
