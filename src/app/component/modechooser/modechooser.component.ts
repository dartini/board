import {GameConfiguratorService} from './../../module/core/service/gameconfigurator.service';
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modechooser',
  templateUrl: './modechooser.component.html',
  styleUrls: ['./modechooser.component.scss']
})
export class ModechooserComponent implements OnInit {

  public constructor(private gameConfigurationService: GameConfiguratorService, private router: Router) { }

  public ngOnInit() {
  }

  public setGameMode(event, isTeam: boolean) {
    this.gameConfigurationService.setIsTeamGame(isTeam);
    this.router.navigate(['/app/playerchooser']);
  }
}
