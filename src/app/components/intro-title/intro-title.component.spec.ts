import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroTitleComponent } from './intro-title.component';

describe('IntroTitleComponent', () => {
  let component: IntroTitleComponent;
  let fixture: ComponentFixture<IntroTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
