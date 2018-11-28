import {Rule} from './rule.model';
import {User} from './user.model';
import {JsonProperty} from 'ts-serializer-core';

export class Game {

  @JsonProperty({name: 'uid', excludeToJson: true})
  public id: string;

  @JsonProperty({name: 'rule', type: Rule})
  public rule: Rule;

  @JsonProperty({name: 'players', type: User})
  public players: User[];
}
