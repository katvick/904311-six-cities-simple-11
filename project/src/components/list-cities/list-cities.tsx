import React from 'react';
import { useAppDispatch } from '../../hooks';
import { changeCity, fillListOffer } from '../../store/action';
import CityItem from '../city-item/city-item';
import { CITIES } from '../../const';

type ListCitiesProps = {
  activeCity: string;
}

function ListCities({activeCity}: ListCitiesProps): JSX.Element {
  const dispatch = useAppDispatch();

  const changeCityHandle = (evt: React.MouseEvent<HTMLUListElement>) => {
    const target = evt.target as HTMLLIElement;
    dispatch(changeCity({city: target.innerText}));
    dispatch(fillListOffer());
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list" onClick={changeCityHandle}>
          {CITIES.map((city, id) => {
            const keyValue = `${id}-city`;
            return (
              <CityItem
                key={keyValue}
                city={city}
                activeCity={activeCity}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default ListCities;
