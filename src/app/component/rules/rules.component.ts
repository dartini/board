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

  public constructor(private ruleService: RuleService, private router: Router) { }

  public ngOnInit() {
    this.rules$ = this.ruleService.getAllRules();
  }

  public selectRule() {
    this.router.navigate(['/app/modechooser']);
  }
}
