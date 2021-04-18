import { Component, Input, OnInit } from '@angular/core';
import { ReviewInterface } from 'src/utils/reviewData';

@Component({
  selector: 'section-four-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() rev!: ReviewInterface;

  constructor() {}

  ngOnInit(): void {}
}
