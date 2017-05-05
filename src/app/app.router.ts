import {Routes} from '@angular/router';

import {PageNotFoundComponent} from './not-found/not-found.component';
import {DogComponent} from './dog/dog.component';
import {CatComponent} from './cat/cat.component';

export const RouteCollection: Routes = [
  { path: 'dog', component: DogComponent },
  { path: 'cat', component: CatComponent },
  { path: 'hero/:id',      component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];
