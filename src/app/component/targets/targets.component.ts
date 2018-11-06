import {Component, OnInit} from '@angular/core';
import {UserService} from '../../module/core/service/user.service';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent implements OnInit {

  public constructor(private userService: UserService) {
  }

  public ngOnInit(): void {
    this.userService.findUserAccount().subscribe(
      (t) => console.log(t)
    );
    this.userService.findById('tDzoR90yPiO5pRQLTBdM').subscribe(
      (t) => console.log(t)
    );
  }
}
