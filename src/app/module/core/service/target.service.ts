import {NgxTsDeserializerService} from 'ngx-ts-serializer';
import {mergeMap, tap, toArray, map, merge} from 'rxjs/operators';
import {Target} from './../model/target.model';
import {User} from './../model/user.model';
import {Observable, forkJoin, from, of} from 'rxjs';
import {AngularFirestore, QuerySnapshot, QueryDocumentSnapshot} from 'angularfire2/firestore';
import {Injectable} from '@angular/core';

@Injectable()
export class TargetService {

  public constructor(private db: AngularFirestore,
                    private deserializer: NgxTsDeserializerService) {
  }

  public findUserTargets(user: User): Observable<Target[]> {
    return from(user.targetsNames).pipe(
      mergeMap((name: string) => this.db.collection('targets', (ref) => ref.where('name', '==', name)).get()),
      toArray(),
      mergeMap(s => from(s).pipe(
        mergeMap((t: QuerySnapshot<any>) => from(t.docs).pipe(
            map((r: QueryDocumentSnapshot<any>) => this.deserializer.deserialize(Target, r.data()))
        )),
        toArray()
      )),
    );
  }

}
