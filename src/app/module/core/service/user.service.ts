import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {User} from '../model/user.model';
import {AuthService} from './auth.service';
import {map, mergeMap, tap} from 'rxjs/internal/operators';
import {NgxTsDeserializerService} from 'ngx-ts-serializer';
import * as firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {Action} from 'rxjs/internal/scheduler/Action';

@Injectable()
export class UserService {

  private users: AngularFirestoreCollection<User>;

  public constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    private deserializer: NgxTsDeserializerService) {
    this.users = this.db.collection<User>('users');
  }

  public findUserAccount(): Observable<User> {
    return this.authService.user.pipe(
      mergeMap((user: firebase.User) => this.findById(user.uid)),
      tap((u) => console.log(u))
    );
  }

  public findById(id: string): Observable<User> {
    return this.users.doc<User>(id).snapshotChanges().pipe(
      map((snapshot: Action<DocumentSnapshot<User>>) => {
        const user: User = this.deserializer.deserialize(User, snapshot.payload.data());
        user.id = snapshot.payload.id;

        return user;
      })
    );
  }
}
