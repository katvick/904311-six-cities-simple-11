export type Review = {
  avatar: string;
  name: string;
  rating: number;
  date: string;
  review: string;
};

export type OwnerInfo = {
  avatar: string;
  name: string;
  statusPro: boolean;
}

export type Offer = {
  city: string;
  header: string;
  picture: string;
  photos: string[];
  description: string;
  premium: boolean;
  price: number;
  type: string;
  rating: number;
  badrooms: number;
  adults: number;
  inside: string[];
  owner: OwnerInfo;
};
