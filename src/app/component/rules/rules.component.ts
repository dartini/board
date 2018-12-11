import {GameConfiguratorService} from './../../module/core/service/gameconfigurator.service';
import {Router} from '@angular/router';
import {Rule} from './../../module/core/model/rule.model';
import {Observable} from 'rxjs';
import {RuleService} from './../../module/core/service/rule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  public rules$: Observable<Rule[]>;

  public constructor(private ruleService: RuleService,
                     private gameConfigurationService: GameConfiguratorService,
                     private router: Router) { }

  public ngOnInit() {
    this.rules$ = this.ruleService.getAllRules();
  }

  public selectRule(event, rule: Rule) {
    this.gameConfigurationService.setRule(rule);
    this.router.navigate(['/app/modechooser']);
  }
}
