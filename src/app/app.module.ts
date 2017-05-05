import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { RouteCollection } from './app.router';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PageNotFoundComponent,
    NavigationComponent,
    DogComponent,
    CatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(RouteCollection)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
