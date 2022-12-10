import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { Reviews } from '../../types/common';
import FormReview from '../form-review/form-review';
import ReviewItem from '../review/review-item';

type ListReviewsProps = {
  reviews: Reviews;
}

function ListReviews({reviews}: ListReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ? <FormReview /> : ''}
    </section>
  );
}

export default ListReviews;
