import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishSelectionComponent } from './fish-selection.component';

describe('FishSelectionComponent', () => {
  let component: FishSelectionComponent;
  let fixture: ComponentFixture<FishSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
