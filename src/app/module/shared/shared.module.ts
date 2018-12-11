import {NgModule} from '@angular/core';
import {SegmentComponent} from './component/segment/segment.component';
import {SegmentDisplayerComponent} from './component/segment-displayer/segment-displayer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SegmentComponent,
    SegmentDisplayerComponent
  ],
  exports: [
    CommonModule,
    SegmentComponent,
    SegmentDisplayerComponent
  ]
})
export class SharedModule {}
