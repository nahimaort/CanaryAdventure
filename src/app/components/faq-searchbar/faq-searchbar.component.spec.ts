import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSearchbarComponent } from './faq-searchbar.component';

describe('FaqSearchbarComponent', () => {
  let component: FaqSearchbarComponent;
  let fixture: ComponentFixture<FaqSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqSearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
