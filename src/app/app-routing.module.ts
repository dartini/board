import {RulesComponent} from './component/rules/rules.component';
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
        path: '',
        pathMatch: 'full',
        redirectTo: 'games/501/LEUkdHQsKILpTC5jrK41'
      },
      {
        path: 'targets',
        component: TargetsComponent
      },
      {
        path: 'rules',
        component: RulesComponent
      },
      {
        path: 'games',
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '501'
          },
          {
            path: '501',
            loadChildren: './module/five-hundred-one/five-hundred-one.module#FiveHundredOneModule'
          }
        ]
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
