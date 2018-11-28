import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Game} from '../../../core/model/game.model';
import {GameService} from '../../../core/service/game.service';

@Component({
  selector: 'app-five-hundred-one',
  templateUrl: './five-hundred-one.component.html',
  styleUrls: ['./five-hundred-one.component.scss']
})
export class FiveHundredOneComponent implements OnInit {

  public game$: Observable<Game>;

  public constructor(private activatedRoute: ActivatedRoute, private gameService: GameService) {
  }

  public ngOnInit() {
    this.game$ = this.activatedRoute.params.pipe(
      filter((params: Params) => !!params['gameId']),
      map((params: Params) => params['gameId']),
      mergeMap((gameId: string) => this.gameService.findById(gameId))
    );
  }
}
