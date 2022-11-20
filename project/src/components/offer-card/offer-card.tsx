import { Link } from 'react-router-dom';
import { Offer } from '../../types/mocks';

type OfferCardProps = {
  offer: Offer;
  setActiveCard: (id: number | null) => void;
}

function OfferCard({offer, setActiveCard}: OfferCardProps): JSX.Element {
  const {
    id,
    photos,
    premium,
    price,
    rating,
    header,
    type
  } = offer;

  const linkOfferCard = `/offer/${id}`;

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => setActiveCard(offer.id)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={linkOfferCard}>
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Placeimage" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${rating / 5 * 100}%`
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={linkOfferCard}>{header}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
