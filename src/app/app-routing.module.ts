import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShapesAnimation} from './shapes-animation/shapes-animation';

const routes: Routes = [
  {path: 'shapes', component: ShapesAnimation}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
