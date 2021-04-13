import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-two-steppart',
  templateUrl: './steppart.component.html',
  styleUrls: ['./steppart.component.scss'],
})
export class SteppartComponent implements OnInit {
  steps = [
    'Complete our questionnaire',
    'Upload your ID',
    'Rowan gets to work',
    'Receive your refund',
  ];

  constructor() {}

  ngOnInit(): void {}
}
