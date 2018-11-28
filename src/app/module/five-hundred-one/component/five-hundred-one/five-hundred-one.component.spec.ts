import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveHundredOneComponent } from './five-hundred-one.component';

describe('FiveHundredOneComponent', () => {
  let component: FiveHundredOneComponent;
  let fixture: ComponentFixture<FiveHundredOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveHundredOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveHundredOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
