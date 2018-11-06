import {Component, OnInit} from '@angular/core';
import {UserService} from './module/core/service/user.service';
import {User} from './module/core/model/user';

@Component({
  selector: 'app-root',
  template: '<p>coucou</p>',
})
export class TestComponent implements OnInit {

  public constructor(private userService: UserService) {

  }

  public ngOnInit(): void {
    console.log('connard');
    this.userService.findUserAccount().subscribe(
      (user: User) => console.log(user)
    );
  }
}
