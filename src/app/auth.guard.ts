import {Observable, of} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './module/core/service/auth.service';
import {catchError, map, mergeMap, tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(private authService: AuthService) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.user.pipe(
      mergeMap((user) => {
        if (user) {
          return of(true);
        }

        return this.authService.authenticateWithFacebook().pipe(
          catchError(() => false),
          map(() => true)
        );
      })
    );
  }
}
