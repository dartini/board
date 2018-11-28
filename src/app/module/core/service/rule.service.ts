import {map} from 'rxjs/operators';
import {Rule} from '../model/rule.model';
import {Observable} from 'rxjs';
import {AngularFirestore, DocumentChangeAction} from 'angularfire2/firestore';
import {NgxTsDeserializerService} from 'ngx-ts-serializer';
import {Injectable} from '@angular/core';

@Injectable()
export class RuleService {

  public constructor(private db: AngularFirestore, private deserializer: NgxTsDeserializerService) {
  }

  public getAllRules(): Observable<Rule[]> {
    return this.db.collection<Rule>('rules').snapshotChanges().pipe(
      map((rules: DocumentChangeAction<any>[]) => rules.map(a => this.deserializer.deserialize(Rule, a.payload.doc.data())))
    );
  }
}
