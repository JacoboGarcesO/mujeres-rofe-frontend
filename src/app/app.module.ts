import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginContainerModule } from './shared/shell/user-login-container/user-login-container.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserLoginContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
