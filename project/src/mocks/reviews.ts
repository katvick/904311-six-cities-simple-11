import { Review } from '../types/mocks';

export const reviews: Review[] = [
  {
    id: 1,
    avatar: `https://i.pravatar.cc/54?rnd=${Math.random()}`,
    name: 'Govard',
    rating: 4.4,
    date: '2019-04-24',
    reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    id: 2,
    avatar: `https://i.pravatar.cc/54?rnd=${Math.random()}`,
    name: 'Leonard',
    rating: 2.5,
    date: '2019-05-30',
    reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin semper non dui vitae porttitor. Curabitur eu tristique justo. Duis in semper dui. Nunc eget tempus quam, quis interdum ligula. ',
  },
  {
    id: 3,
    avatar: `https://i.pravatar.cc/54?rnd=${Math.random()}`,
    name: 'Sheldon',
    rating: 3.7,
    date: '2019-07-19',
    reviewText: 'Nam non vestibulum nunc. Nunc scelerisque malesuada metus, a viverra ex maximus nec. Praesent nisi diam, elementum quis justo vitae, commodo vehicula arcu.',
  },
];
