import {JsonProperty} from 'ts-serializer-core';
export class User {

  public id: string;

  @JsonProperty('displayName')
  public displayName: string;

  @JsonProperty('email')
  public email: string;

  @JsonProperty('photoUrl')
  public photoUrl: string;
}
