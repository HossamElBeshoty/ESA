import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersCoverHeaderComponent } from './members-cover-header.component';

describe('MembersCoverHeaderComponent', () => {
  let component: MembersCoverHeaderComponent;
  let fixture: ComponentFixture<MembersCoverHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersCoverHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersCoverHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
