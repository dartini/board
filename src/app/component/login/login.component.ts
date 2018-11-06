import { Component, OnInit } from '@angular/core';
import {User} from '../../module/core/model/user.model';
import {UserService} from '../../module/core/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public constructor(private userService: UserService) {

  }

  public ngOnInit(): void {
    console.log('connard');
    this.userService.findUserAccount().subscribe(
      (user: User) => console.log(user)
    );
  }
}
