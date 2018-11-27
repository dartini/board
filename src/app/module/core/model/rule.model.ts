import {JsonProperty} from 'ts-serializer-core';

export class Rule {

  @JsonProperty('name')
  public name: string;

  @JsonProperty('params')
  public params: string[];

  @JsonProperty('playerMax')
  public playerMax: number;

  @JsonProperty('processor')
  public processor: string;

  @JsonProperty('teamAvailable')
  public teamAvailable: boolean;

  @JsonProperty('teamMax')
  public teamMax: number;

}
