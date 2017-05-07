import { Component, OnInit } from '@angular/core';
import * as mtgsdk from 'mtgsdk';

@Component({
  template: `
    <app-page [title]="'Dog'">
        Woof
    </app-page>
  `
})
export class DogComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      mtgsdk.set.find('AER')
          .then(result => {
              console.log(result.set.name);  // "Aether Revolt"
          });
  }
}

