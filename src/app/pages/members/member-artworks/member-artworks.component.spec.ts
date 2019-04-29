import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberArtworksComponent } from './member-artworks.component';

describe('MemberArtworksComponent', () => {
  let component: MemberArtworksComponent;
  let fixture: ComponentFixture<MemberArtworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberArtworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberArtworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
