import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyPlaceComponent } from './study-place.component';

describe('StudyPlaceComponent', () => {
  let component: StudyPlaceComponent;
  let fixture: ComponentFixture<StudyPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
