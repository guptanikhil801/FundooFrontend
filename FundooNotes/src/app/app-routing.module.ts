import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { NotesComponent } from 'src/app/components/notes/notes.component';
import { ErrorpageComponent } from 'src/app/components/errorpage/errorpage.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {path: '**', component: ErrorpageComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children:
      [
        { path: '', component: NotesComponent },
        { path: 'note', component: NotesComponent }
      ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
