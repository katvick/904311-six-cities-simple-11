export type Review = {
  id: number;
  avatar: string;
  name: string;
  rating: number;
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
  photos: string[];
  description: string;
  premium: boolean;
  price: number;
  type: string;
  rating: number;
  bedrooms: number;
  adults: number;
  householdItems: string[];
  owner: OwnerInfo;
  reviews: Review[];
};

export type Offers = Offer[];
