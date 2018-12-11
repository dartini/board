import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from './module/core/core.module';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './auth.guard';
import {NgxTsSerializerModule} from 'ngx-ts-serializer';
import {TargetsComponent} from './component/targets/targets.component';
import {RulesComponent} from './component/rules/rules.component';
import { ModechooserComponent } from './component/modechooser/modechooser.component';
import { PlayerchooserComponent } from './component/playerchooser/playerchooser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TargetsComponent,
    RulesComponent,
    ModechooserComponent,
    PlayerchooserComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    NgxTsSerializerModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
