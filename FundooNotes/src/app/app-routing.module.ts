import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { NotesComponentComponent } from 'src/app/components/notes-component/notes-component.component';
import { DisplayNoteComponent } from 'src/app/components/display-note/display-note.component';
import { CreatenoteComponent } from 'src/app/components/createnote/createnote.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [{ path: '', component: NotesComponentComponent },
    {
      path: 'note', component: NotesComponentComponent,
      children: 
      [
        { path: 'display', component: DisplayNoteComponent },
        { path: 'createnote', component: CreatenoteComponent }
      ]
    }
    ]
  }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
