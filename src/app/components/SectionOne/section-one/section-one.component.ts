import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {
  @ViewChild('#navbar') navbar!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}
