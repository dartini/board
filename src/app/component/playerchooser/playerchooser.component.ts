import {Observable} from 'rxjs';
import {UserService} from './../../module/core/service/user.service';
import {GameConfiguration} from './../../module/core/model/gameconfiguration.model';
import {GameConfiguratorService} from './../../module/core/service/gameconfigurator.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/module/core/model/user.model';

@Component({
  selector: 'app-playerchooser',
  templateUrl: './playerchooser.component.html',
  styleUrls: ['./playerchooser.component.scss']
})
export class PlayerchooserComponent implements OnInit {

  public gameConfiguration: GameConfiguration;
  public users$: Observable<User[]>;

  public constructor(private gameConfigurationService: GameConfiguratorService, private userService: UserService) {  }

  public ngOnInit() {
    this.gameConfiguration = this.gameConfigurationService.getConfiguration();
    this.users$ = this.userService.getAll();
  }
}
