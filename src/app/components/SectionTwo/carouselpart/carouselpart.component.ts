import { AfterViewInit, Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'section-two-carouselpart',
  templateUrl: './carouselpart.component.html',
  styleUrls: ['./carouselpart.component.scss'],
})
export class CarouselpartComponent implements OnInit, AfterViewInit {
    breakpoints =
    {
    // when window width is >= 300px
    300: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 420px
    420: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 720px
    720: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }

  constructor() {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
