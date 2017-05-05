import {Component} from '@angular/core';

@Component({
  template: `
      <app-page [title]="'Page not found'">
          The page you are looking for cannot be displayed.
      </app-page>
  `
})
export class PageNotFoundComponent {}
