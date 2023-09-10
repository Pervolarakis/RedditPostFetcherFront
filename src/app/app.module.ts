import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContainerComponent } from './components/auth/auth-container/auth-container.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { SearchkeywordComponent } from './components/dashboard/searchkeyword/searchkeyword.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthContainerComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DashboardComponent,
    SearchkeywordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
