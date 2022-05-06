import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandHowToGetThereComponent } from './island-how-to-get-there.component';

describe('IslandHowToGetThereComponent', () => {
  let component: IslandHowToGetThereComponent;
  let fixture: ComponentFixture<IslandHowToGetThereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslandHowToGetThereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandHowToGetThereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
