import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {AuthService} from './auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {catchError, map, mergeMap, share, tap} from 'rxjs/internal/operators';
import {User} from '../model/user';
import {NgxTsSerializerService} from 'ngx-ts-serializer';

@Injectable()
export class UserService {

  private user: Observable<User>;

  private firstUpdate: boolean = false;

  public constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    private serializer: NgxTsSerializerService) {
  }

  public findUserAccount(): Observable<User> {
    console.log(1);
    if (this.user) {
      return this.user;
    }

    console.log(2);
    this.user = this.authService.user.pipe(
      tap((t) => console.log('coucou', t)),
      mergeMap((user) => {
        console.log(3);
        if (user) {
          return this.makeUser(user);
        }

        return this.authService.authenticateWithFacebook().pipe(
          mergeMap((userInformations: any) => this.makeUser(userInformations))
        );
      }),
      share()
    );

    return this.user;
  }

  public findById(id: string): Observable<User> {
    return this.db
      .object('/users/' + id)
      .snapshotChanges()
      .pipe(
        tap((os: any) => {
          if (!os.key) {
            throw Error('No user found');
          }
        }),
        map((os: any) => {
          const u: User = <User>os.payload.val();
          u.id = os.payload.key;

          return u;
        })
      );
  }

  private makeUser(userInformation: any): Observable<User> {
    return this.findById(userInformation.providerData[0].uid)
      .pipe(
        tap((user: User) => {
          if (this.firstUpdate) {
            return;
          }

          const infos = userInformation.providerData[0];
          user.username = infos.email;
          user.displayName = infos.displayName;
          user.photoURL = infos.photoURL;

          this.db.object('/users/' + userInformation.providerData[0].uid).set(this.serializer.serialize(user));
          this.firstUpdate = true;
        }),
        catchError((err: Error) => {
          const user: User = <User>userInformation.providerData[0];
          this.db.object('/users/' + userInformation.providerData[0].uid).set(this.serializer.serialize(user));

          user.id = userInformation.providerData[0].uid;

          return this.user;
        })
      );
  }
}
