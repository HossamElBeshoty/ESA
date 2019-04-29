import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersSearchHeaderComponent } from './members-search-header.component';

describe('MembersSearchHeaderComponent', () => {
  let component: MembersSearchHeaderComponent;
  let fixture: ComponentFixture<MembersSearchHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersSearchHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
