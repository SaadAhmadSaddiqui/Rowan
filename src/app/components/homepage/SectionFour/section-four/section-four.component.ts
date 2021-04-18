import { Component, OnInit } from '@angular/core';
import { reviewData } from 'src/utils/reviewData';

@Component({
  selector: 'homepage-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss'],
})
export class SectionFourComponent implements OnInit {
  reviewsList1 = reviewData;
  reviewsList2 = reviewData;

  constructor() {}

  ngOnInit(): void {}
}
