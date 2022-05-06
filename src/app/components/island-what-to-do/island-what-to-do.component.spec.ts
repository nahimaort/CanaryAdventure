import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandWhatToDoComponent } from './island-what-to-do.component';

describe('IslandWhatToDoComponent', () => {
  let component: IslandWhatToDoComponent;
  let fixture: ComponentFixture<IslandWhatToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslandWhatToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandWhatToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
