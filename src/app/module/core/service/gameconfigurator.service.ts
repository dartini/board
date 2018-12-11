import {Rule} from './../model/rule.model';
import {GameConfiguration} from './../model/gameconfiguration.model';
import {Injectable} from '@angular/core';

@Injectable()
export class GameConfiguratorService {

  private gameConfiguration: GameConfiguration;

  public constructor() {
    this.gameConfiguration = new GameConfiguration();
  }

  public setRule(rule: Rule) {
    this.gameConfiguration.rule = rule;
  }

  public setIsTeamGame(isTeam: boolean) {
    this.gameConfiguration.isTeam = isTeam;
  }

  public getConfiguration(): GameConfiguration {
    return this.gameConfiguration;
  }
}
