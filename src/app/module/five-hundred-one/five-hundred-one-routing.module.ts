import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FiveHundredOneComponent} from './component/five-hundred-one/five-hundred-one.component';

const routes: Routes = [
  {
    path: '',
    component: FiveHundredOneComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class FiveHundredOneRoutingModule {
}
