export class User {

  @JsonProperty('displayName')
  public displayName: string;

  public email: string;

  public photoUrl: string;
}
