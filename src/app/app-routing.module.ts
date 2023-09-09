import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from './components/auth/auth-container/auth-container.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  // {path: 'register', component: AuthContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
