import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishListItemComponent } from './fish-list-item.component';

describe('FishListItemComponent', () => {
  let component: FishListItemComponent;
  let fixture: ComponentFixture<FishListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
