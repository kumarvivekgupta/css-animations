import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShapesAnimation} from './shapes-animation/shapes-animation';
import {CourseCard} from './course-card/course-card';

@NgModule({
  declarations: [
    AppComponent, ShapesAnimation, CourseCard
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
