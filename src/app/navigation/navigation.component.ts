import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template:
  `
  <div [style.width]="width()" class="nav-canvas">
      <div class="nav-items" [style.align-items]="alignItems()">
          <div *ngFor="let item of navItems">
              <a routerLink="{{getRoute(item)}}">{{ item.label }}</a>
          </div>
          <span (click)="expandCollapse()" [innerText]="expandCollapseLabel()"></span>
      </div>
  </div>
  `,
  styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {
  expanded = true;

  navItems: NavItem[] = [
    {label: 'Dog', route: '/dog'},
    {label: 'Cat', route: '/cat'},
    {label: 'Goat', route: '/goat'}
  ];

  constructor() {}

  width(): string {
    return this.expanded ? '400px' : '50px';
  }

  expandCollapse(): void {
    this.expanded = !this.expanded;
  }

  expandCollapseLabel(): string {
    return this.expanded ? '<<' : '>>';
  }

  getRoute(item: NavItem): string {
    return item.route;
  };

  alignItems(): string {
    return this.expanded ? 'flex-end' : 'center';
  }

}

class NavItem {
  label: string;
  route: string;
}
