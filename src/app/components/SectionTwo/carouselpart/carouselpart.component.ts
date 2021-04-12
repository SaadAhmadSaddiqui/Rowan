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
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
  
  constructor() {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
