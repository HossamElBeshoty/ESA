import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersFooterComponent } from './members-footer.component';

describe('MembersFooterComponent', () => {
  let component: MembersFooterComponent;
  let fixture: ComponentFixture<MembersFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
