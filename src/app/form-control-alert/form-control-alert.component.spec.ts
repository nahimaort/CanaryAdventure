import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlAlertComponent } from './form-control-alert.component';

describe('FormControlAlertComponent', () => {
  let component: FormControlAlertComponent;
  let fixture: ComponentFixture<FormControlAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
