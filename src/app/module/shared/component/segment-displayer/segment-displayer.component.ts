import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-segment-displayer',
  templateUrl: './segment-displayer.component.html',
  styleUrls: ['./segment-displayer.component.scss']
})
export class SegmentDisplayerComponent implements OnInit {

  public segments: number[] = [];

  public constructor() {
  }

  public ngOnInit(): void {
  }

  @Input()
  public set segmentNumber(value: number) {
    this.segments = [];

    for (let i = 0; i < value; i++) {
      this.segments.push(i);
    }
  }
}
