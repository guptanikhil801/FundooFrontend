import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { NotesComponent } from 'src/app/components/notes/notes.component';
import { DisplayNoteComponent } from 'src/app/components/display-note/display-note.component';
import { CreatenoteComponent } from 'src/app/components/createnote/createnote.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
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
