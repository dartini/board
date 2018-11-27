import {Router} from '@angular/router';
import {tap} from 'rxjs/internal/operators';
import {User} from './../../module/core/model/user.model';
import {mergeMap} from 'rxjs/operators';
import {Target} from './../../module/core/model/target.model';
import {Observable} from 'rxjs';
import {TargetService} from './../../module/core/service/target.service';
import {Component, OnInit} from '@angular/core';
import {UserService} from '../../module/core/service/user.service';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.scss']
})
export class TargetsComponent  implements OnInit {

  public targets$: Observable<Target[]>;

  public constructor(private userService: UserService, private targetService: TargetService, private router: Router) {
  }

  public ngOnInit(): void {
    this.targets$ = this.userService.findUserAccount().pipe(
      mergeMap((user: User) => this.targetService.findUserTargets(user)),
      tap((t) => t.length < 3 ? this.router.navigate(['app', 'games']) : null)
    );
  }
}
