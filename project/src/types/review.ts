export type NewReviewData = {
  comment: string;
  rating: number;
}

export type ReviewRequestData = NewReviewData & {id: number};
