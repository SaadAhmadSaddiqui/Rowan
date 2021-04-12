import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit, AfterViewInit {
  @ViewChild('section1') section1!: ElementRef;
  @Output() section1Height = new EventEmitter();

  constructor() {}

  ngAfterViewInit(): void {
    this.section1Height.emit(this.section1.nativeElement.scrollHeight);
  }

  ngOnInit(): void {}
}
