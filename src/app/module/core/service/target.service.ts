import {NgxTsDeserializerService} from 'ngx-ts-serializer';
import {mergeMap, toArray, map} from 'rxjs/operators';
import {Target} from './../model/target.model';
import {User} from './../model/user.model';
import {Observable, from} from 'rxjs';
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
      mergeMap((qss: QuerySnapshot<any>[]) => from(qss).pipe(
        mergeMap((qs: QuerySnapshot<QueryDocumentSnapshot<any>>) => from(qs.docs).pipe(
            map((r: QueryDocumentSnapshot<any>) => this.deserializer.deserialize(Target, r.data()))
        )),
        toArray()
      )),
    );
  }

}
