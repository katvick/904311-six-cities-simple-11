export type Review = {
  avatar: string;
  name: string;
  ratingReview: number;
  date: string;
  reviewText: string;
};

export type OwnerInfo = {
  avatar: string;
  name: string;
  statusPro: boolean;
}

export type Offer = {
  id: number;
  city: string;
  header: string;
  picture: string;
  photos: string[];
  description: string;
  premium: boolean;
  price: number;
  type: string;
  ratingOffer: number;
  bedrooms: number;
  adults: number;
  householdItems: string[];
  owner: OwnerInfo;
};

export type Offers = Offer[];
export type Reviews = Review[];
