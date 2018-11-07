import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './auth.guard';
import {TargetsComponent} from './component/targets/targets.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'targets',
        component: TargetsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
