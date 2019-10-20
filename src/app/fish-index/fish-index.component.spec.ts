import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishIndexComponent } from './fish-index.component';

describe('FishIndexComponent', () => {
  let component: FishIndexComponent;
  let fixture: ComponentFixture<FishIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
