import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLinkComponent } from './more-link.component';

describe('MoreLinkComponent', () => {
  let component: MoreLinkComponent;
  let fixture: ComponentFixture<MoreLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
