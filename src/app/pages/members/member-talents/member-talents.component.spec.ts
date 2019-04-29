import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTalentsComponent } from './member-talents.component';

describe('MemberTalentsComponent', () => {
  let component: MemberTalentsComponent;
  let fixture: ComponentFixture<MemberTalentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberTalentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
