import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiveHundredOneComponent} from './component/five-hundred-one/five-hundred-one.component';
import {FiveHundredOneRoutingModule} from './five-hundred-one-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    FiveHundredOneRoutingModule,
    SharedModule
  ],
  declarations: [FiveHundredOneComponent]
})
export class FiveHundredOneModule {
}
