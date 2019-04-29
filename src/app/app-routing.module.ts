import {NgModule} from '@angular/core';
import {Routes, RouterModule, UrlSegment} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MembersComponent} from './pages/members/members.component';
import {MemberAboutComponent} from './pages/members/member-about/member-about.component';
import {MemberArtworksComponent} from './pages/members/member-artworks/member-artworks.component';
import {MemberTalentsComponent} from './pages/members/member-talents/member-talents.component';
import {MemberGalleryComponent} from './pages/members/member-gallery/member-gallery.component';
import {MemberNewsComponent} from './pages/members/member-news/member-news.component';
import {MemberTimelineComponent} from './pages/members/member-timeline/member-timeline.component';
import {MembersSearchComponent} from './pages/members/members-search/members-search.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {LocalizationService} from './services/localization.service';


export function defaultLangCode() {
  // TODO get/set default language in local storage
  return 'ar';
}

export function checkLang(url: UrlSegment[]) {
  if (url[0]) {
    return url[0].path.startsWith('en') || url[0].path.startsWith('ar')
    || url[0].path.startsWith('fr') ? ({consumed: url}) : null;
  } else {
    return null;
  }
}


const routes: Routes = [
  {
    path: 'members',
    redirectTo: '/' + defaultLangCode() + '/members-search',
    pathMatch: 'full'
  },
  {
    path: 'members/:id',
    redirectTo: '/' + defaultLangCode() + '/members/:id/about',
    pathMatch: 'full'
  },
  {
    path: 'members-search',
    redirectTo: '/' + defaultLangCode() + '/members-search',
    pathMatch: 'full'
  },
  {
    path: ':langCode',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'members',
        component: MembersComponent,
        children: [
          {
            path: '',
            redirectTo: '/' + defaultLangCode() + '/members-search',
            pathMatch: 'full'
          },
          {
            path: ':id',
            redirectTo: ':id/about',
            pathMatch: 'full'
          },
          {
            path: ':id/about',
            component: MemberAboutComponent
          },
          {
            path: ':id/artworks',
            component: MemberArtworksComponent
          },
          {
            path: ':id/talents',
            component: MemberTalentsComponent
          },
          {
            path: ':id/gallery',
            component: MemberGalleryComponent
          },
          {
            path: ':id/news',
            component: MemberNewsComponent
          },
          {
            path: ':id/timeline',
            component: MemberTimelineComponent
          },
        ]
      },
      {
        path: 'members-search',
        component: MembersSearchComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/' + defaultLangCode(),
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
