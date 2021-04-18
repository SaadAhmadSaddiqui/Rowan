export interface ReviewInterface {
  name: string;
  reviewFrom: { name: string; img: string };
  rating: string;
  comment: string;
}

export const reviewData: ReviewInterface[] = [
  {
    name: 'John Smith',
    reviewFrom: {
      name: 'facebook',
      img: '/assets/images/svgs/section-four/facebook.svg',
    },
    rating: '5.0',
    comment:
      'So by colonel hearted ferrars. Draw from upon here gone add one. He in sports man household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length need in it he having. Whatever throwing we on resolved entrance together graceful.',
  },
  {
    name: 'Williams Harry',
    reviewFrom: {
      name: 'trust-pilot',
      img: '/assets/images/svgs/section-four/tp.svg',
    },
    rating: '5.0',
    comment:
      'Six started far placing saw respect females old. Civilly why how end viewing attempt related enquire visitor. Man particular insensible celebrated conviction stimulated principles day. Sure fail or in said west. Right my front it wound cause.',
  },
  {
    name: 'Ada Wong',
    reviewFrom: {
      name: 'google',
      img: '/assets/images/svgs/section-four/google.svg',
    },
    rating: '2.0',
    comment:
      'Another journey chamber way yet liceer man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless incommode earnestly no he commanded.',
  },
  {
    name: 'Leon Kennedy',
    reviewFrom: {
      name: 'facebook',
      img: '/assets/images/svgs/section-four/facebook.svg',
    },
    rating: '4.8',
    comment:
      'So by colonel hearted ferrars. Draw from upon here gone add one. He in sports man household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length need in it he having. Whatever throwing we on resolved entrance together graceful.',
  },
  {
    name: 'Ko Mun-Young',
    reviewFrom: {
      name: 'google',
      img: '/assets/images/svgs/section-four/google.svg',
    },
    rating: '3.0',
    comment:
      'So by colonel hearted ferrars. Draw from upon here gone add one. He in sports man household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length need in it he having. Whatever throwing we on resolved entrance together graceful.',
  },
];
