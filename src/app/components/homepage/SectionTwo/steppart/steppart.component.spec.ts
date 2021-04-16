import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppartComponent } from './steppart.component';

describe('SteppartComponent', () => {
  let component: SteppartComponent;
  let fixture: ComponentFixture<SteppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteppartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
