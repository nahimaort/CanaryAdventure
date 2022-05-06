import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandDescriptionComponent } from './island-description.component';

describe('IslandDescriptionComponent', () => {
  let component: IslandDescriptionComponent;
  let fixture: ComponentFixture<IslandDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslandDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
