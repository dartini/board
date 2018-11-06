import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {fromPromise} from 'rxjs/internal/observable/fromPromise';
import {map, share, shareReplay} from 'rxjs/internal/operators';
import {User} from '../model/user.model';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User> = null;

  public constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState.pipe(shareReplay(1));
  }

  public authenticateWithFacebook(): Observable<any> {
    return fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()));
  }

  public isLogged(): Observable<boolean> {
    return this.user.pipe(
      map((user: User) => !!user)
    );
  }

  public logout() {
    this.afAuth.auth.signOut();
  }
}
