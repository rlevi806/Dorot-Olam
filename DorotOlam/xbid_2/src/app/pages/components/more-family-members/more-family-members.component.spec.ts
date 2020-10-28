import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFamilyMembersComponent } from './more-family-members.component';

describe('MoreFamilyMembersComponent', () => {
  let component: MoreFamilyMembersComponent;
  let fixture: ComponentFixture<MoreFamilyMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreFamilyMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFamilyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
