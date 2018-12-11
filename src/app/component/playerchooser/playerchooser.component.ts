import {GameConfiguration} from './../../module/core/model/gameconfiguration.model';
import {GameConfiguratorService} from './../../module/core/service/gameconfigurator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playerchooser',
  templateUrl: './playerchooser.component.html',
  styleUrls: ['./playerchooser.component.scss']
})
export class PlayerchooserComponent implements OnInit {

  public gameConfiguration: GameConfiguration;

  public constructor(private gameConfigurationService: GameConfiguratorService) {  }

  public ngOnInit() {
    this.gameConfiguration = this.gameConfigurationService.getConfiguration();
  }

}
