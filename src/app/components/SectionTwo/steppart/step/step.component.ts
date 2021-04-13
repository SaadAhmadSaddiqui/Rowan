import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  @Input() stepCount = 1;
  @Input() subText = '';

  constructor() {}

  ngOnInit(): void {}
}
