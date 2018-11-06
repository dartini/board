import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './module/core/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(private authService: AuthService) {
  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLogged();
  }
}
