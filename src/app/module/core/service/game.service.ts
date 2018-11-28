import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Game} from '../model/game.model';
import {AngularFirestore, AngularFirestoreCollection, Action, DocumentSnapshot} from 'angularfire2/firestore';
import {NgxTsDeserializerService} from 'ngx-ts-serializer';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: AngularFirestoreCollection<Game>;

  public constructor(private db: AngularFirestore, private deserializer: NgxTsDeserializerService) {
    this.games = this.db.collection<Game>('games');
  }

  public findById(id: string): Observable<Game> {
    return this.games.doc<Game>(id).snapshotChanges().pipe(
      map((snapshot: Action<DocumentSnapshot<Game>>) => {
        if (!snapshot.payload.data()) {
          return null;
        }

        const game: Game = this.deserializer.deserialize(Game, snapshot.payload.data());
        game.id = snapshot.payload.id;

        return game;
      })
    );
  }
}
