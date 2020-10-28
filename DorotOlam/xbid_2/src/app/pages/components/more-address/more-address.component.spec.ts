import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAddressComponent } from './more-address.component';

describe('MoreAddressComponent', () => {
  let component: MoreAddressComponent;
  let fixture: ComponentFixture<MoreAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
