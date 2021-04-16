import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselpartComponent } from './carouselpart.component';

describe('CarouselpartComponent', () => {
  let component: CarouselpartComponent;
  let fixture: ComponentFixture<CarouselpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselpartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
