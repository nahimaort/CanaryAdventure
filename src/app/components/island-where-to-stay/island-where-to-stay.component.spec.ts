import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandWhereToStayComponent } from './island-where-to-stay.component';

describe('IslandWhereToStayComponent', () => {
  let component: IslandWhereToStayComponent;
  let fixture: ComponentFixture<IslandWhereToStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslandWhereToStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandWhereToStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
