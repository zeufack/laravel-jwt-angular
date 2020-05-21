import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, SignupComponent, ProfileComponent, RequestResetComponent, ResponseResetComponent } from './components';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
