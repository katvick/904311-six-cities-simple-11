import { Link } from 'react-router-dom';

type CityItemProps = {
  city: string;
  activeCity: string;
}

function CityItem({city, activeCity}: CityItemProps): JSX.Element {
  return (
    <li className="locations__item" value={city}>
      <Link className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`} to="/">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
