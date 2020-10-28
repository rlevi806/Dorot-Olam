import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbisComponent } from './rabbis.component';

describe('RabbisComponent', () => {
  let component: RabbisComponent;
  let fixture: ComponentFixture<RabbisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
