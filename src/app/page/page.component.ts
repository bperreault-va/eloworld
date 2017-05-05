import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-page',
  styleUrls: ['page.component.scss'],
  template: `
  <div class="page-container">
      <div class="col-left">
          <app-navigation></app-navigation>
      </div>
      <div class="col-right">
      
          <div class="header">
                <h1>{{title}}</h1>
          </div>
          <div class="content">
              <ng-content></ng-content>
          </div>
      </div>
  </div>
  `
})
export class PageComponent {
  @Input() title: string;
}
