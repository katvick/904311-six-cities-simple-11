// export type Review = {
//   id: number;
//   avatar: string;
//   name: string;
//   rating: number;
//   date: string;
//   reviewText: string;
// };

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

// export type Offer = {
//   id: number;
//   city: string;
//   header: string;
//   lat: number;
//   lng: number;
//   photos: string[];
//   description: string;
//   premium: boolean;
//   price: number;
//   type: string;
//   rating: number;
//   bedrooms: number;
//   adults: number;
//   householdItems: string[];
//   owner: OwnerInfo;
//   reviews: Review[];
// };

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  };

export type Offers = Offer[];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: Location;
  name: string;
}

export type Cities = City[];
export type Reviews = Review[];
