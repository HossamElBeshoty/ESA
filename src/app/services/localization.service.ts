import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized, ActivatedRouteSnapshot, PRIMARY_OUTLET } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private defaultLanguage = 'ar';
  langCode = this.defaultLanguage;
  constructor(
    private router: Router
  ) {
    // get first route
    const initialRoute = this.getCurrentRoute(router.routerState.root.firstChild.snapshot);
    this.setLanguageCode(initialRoute);
    // subscribe to the NavigationEnd event
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const currentRoute = this.getCurrentRoute(data.state.root.firstChild);
        this.setLanguageCode(currentRoute);
      }
    });
  }
  private getCurrentRoute(root: ActivatedRouteSnapshot) {
    if (root.children.length > 0) {
      for (const child of root.children) {
        return this.getCurrentRoute(child);
      }
    } else {
      return root;
    }
  }

  private setLanguageCode(route: ActivatedRoute) {
    // route.paramMap.subscribe(params => {
      // first get the language from the route, in case user changed it.
      this.langCode = route.params['langCode'];
      // if for any reasons route does not contain language code, will
      // try to get it from local storage, but this case should not happen,
      // as routing is configured to always coatain language code for SEO reasons..
      if (!this.langCode) {
        this.langCode = localStorage.getItem('langCode');
      }
      // still language code cannot be found in route or local storage, will use default 
      // language code, this case might happen only once when the user opens the home
      // page for the first time in his browser.
      if (!this.langCode) {
        this.langCode = this.defaultLanguage;
      }
      // if language is still null, this should raise an error
      if (!this.langCode) {
        // TODO error log this
      }
      // Save language in local storage to use it next time the user openes
      // home page without setting the language code
      localStorage.setItem('langCode', this.langCode);
      console.log(this.langCode);
    // });
  }
}
