import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.scss'],
})
export class SectionFourComponent implements OnInit {
  reviewsList1: string[] = new Array(5);
  reviewsList2: string[] = new Array(5);

  constructor() {}

  ngOnInit(): void {}
}
