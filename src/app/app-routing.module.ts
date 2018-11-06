import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
<<<<<<< HEAD
import { LoginComponent } from './component/login/login.component';
=======
import {AuthGuard} from './auth.guard';
import {TestComponent} from './test.component';
>>>>>>> Add AuthGuard with fb auth

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: LoginComponent
=======
    canActivate: [AuthGuard],
    component: TestComponent
>>>>>>> Add AuthGuard with fb auth
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
