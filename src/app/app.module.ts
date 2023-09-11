import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthContainerComponent } from './components/auth/auth-container/auth-container.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { SearchkeywordComponent } from './components/dashboard/searchkeyword/searchkeyword.component';
import { SearchHistoryListComponent } from './components/dashboard/search-history-list/search-history-list.component';
import { SearchHistoryListItemComponent } from './components/dashboard/search-history-list-item/search-history-list-item.component';
import { DisplaySearchResultComponent } from './components/display-search-result/display-search-result/display-search-result.component';
import { PostComponent } from './components/display-search-result/post/post.component';
import { PostModalComponent } from './components/display-search-result/post-modal/post-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AuthContainerComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DashboardComponent,
    SearchkeywordComponent,
    SearchHistoryListComponent,
    SearchHistoryListItemComponent,
    DisplaySearchResultComponent,
    PostComponent,
    PostModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
