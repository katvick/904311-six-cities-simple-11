import { Offer } from '../../types/mocks';
import ReviewComponent from '../review/review';

type ListReviewsProps = {
  offer: Offer | undefined;
}

function ListReviews({offer}: ListReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {offer?.reviews.map((review) => (
        <ReviewComponent key={review.id} review={review}/>
      ))}
    </ul>
  );
}

export default ListReviews;
