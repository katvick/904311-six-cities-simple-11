import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffersAction, fetchReviewsAction, fetchSelectedOfferAction } from '../../store/api-actions';
import Header from '../../components/header/header';
import LoadingPage from '../loading-page/loading-page';
import OfferPageContent from '../../components/offer-page-content/offer-page-content';

function OfferCardPage(): JSX.Element {
  const offer = useAppSelector((state) => state.selectedOffer);

  const checkOfferLoading = useAppSelector((state) => state.isSelectedOfferLoading);
  const checkNearbyOffersLoading = useAppSelector((state) => state.isNearbyOffersLoading);
  const checkReviewsLoading = useAppSelector((state) => state.isReviewsLoading);

  const isDataLoading = offer === null || checkOfferLoading || checkNearbyOffersLoading || checkReviewsLoading;

  const dispatch = useAppDispatch();

  const {id} = useParams();
  const offerId = Number(id);

  useEffect(() => {
    dispatch(fetchSelectedOfferAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));
    dispatch(fetchReviewsAction(offerId));
  }, [dispatch, offerId]);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Offer card</title>
      </Helmet>

      <Header />

      {
        isDataLoading
          ? <LoadingPage />
          : <OfferPageContent />
      }
    </div>
  );
}

export default OfferCardPage;
