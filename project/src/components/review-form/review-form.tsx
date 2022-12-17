import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';
import { getSelectedOffer } from '../../store/offer/selectors';

enum ReviewTextLength {
  Min = 50,
  Max = 300,
}

function ReviewForm(): JSX.Element {
  const offerId = useAppSelector(getSelectedOffer)?.id;

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: null,
    review: ''
  });

  const isFormInvalid = formData.rating === null
    || formData.review.length < ReviewTextLength.Min
    || formData.review.length > ReviewTextLength.Max;

  const ratingChangeHandle = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = target;
    setFormData({...formData, [name]: +value});
  };

  const fieldChangeHandle = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  };

  const formSubmitHandle = (evt: FormEvent) => {
    evt.preventDefault();

    if (formData.review !== '' && formData.rating !== null && offerId !== undefined) {
      dispatch(sendReviewAction({
        id: offerId,
        comment: formData.review,
        rating: formData.rating,
      }));
    }
  };

  return (
    <form className="reviews__form form" action="/" method="post" onSubmit={formSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" onChange={ratingChangeHandle} name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={ratingChangeHandle} name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={ratingChangeHandle} name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={ratingChangeHandle} name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" onChange={ratingChangeHandle} name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={fieldChangeHandle} value={formData.review} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isFormInvalid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
