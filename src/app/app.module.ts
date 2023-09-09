import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContainerComponent } from './components/auth/auth-container/auth-container.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthContainerComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
