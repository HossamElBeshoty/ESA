import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { MemberAboutComponent } from './pages/members/member-about/member-about.component';
import { MemberArtworksComponent } from './pages/members/member-artworks/member-artworks.component';
import { MemberTalentsComponent } from './pages/members/member-talents/member-talents.component';
import { MemberGalleryComponent } from './pages/members/member-gallery/member-gallery.component';
import { MemberNewsComponent } from './pages/members/member-news/member-news.component';
import { MemberTimelineComponent } from './pages/members/member-timeline/member-timeline.component';
import { MembersHeaderComponent } from './layout/members/members-header/members-header.component';
import { MembersFooterComponent } from './layout/members/members-footer/members-footer.component';
import { MembersSearchComponent } from './pages/members/members-search/members-search.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CoverPictureComponent } from './web-elements/members/cover-picture/cover-picture.component';
import { ProfilePictureComponent } from './web-elements/members/profile-picture/profile-picture.component';
import { AdBannerComponent } from './web-elements/ads/ad-banner/ad-banner.component';
import { MembersCoverHeaderComponent } from './layout/members/members-cover-header/members-cover-header.component';
import { MembersSearchHeaderComponent } from './layout/members/members-search-header/members-search-header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    MemberAboutComponent,
    MemberArtworksComponent,
    MemberTalentsComponent,
    MemberGalleryComponent,
    MemberNewsComponent,
    MemberTimelineComponent,
    MembersHeaderComponent,
    MembersFooterComponent,
    MembersSearchComponent,
    PageNotFoundComponent,
    CoverPictureComponent,
    ProfilePictureComponent,
    AdBannerComponent,
    MembersCoverHeaderComponent,
    MembersSearchHeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
