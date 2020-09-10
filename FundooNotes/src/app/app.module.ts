import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatGridListModule } from '@angular/material';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PinUnpinIconComponent } from './components/icons/pin-unpin-icon/pin-unpin-icon.component';
import { ReminderIconComponent } from './components/icons/reminder-icon/reminder-icon.component';
import { CollaboratorIconComponent } from './components/icons/collaborator-icon/collaborator-icon.component';
import { ColorPaletteIconComponent } from './components/icons/color-palette-icon/color-palette-icon.component';
import { AddImageIconComponent } from './components/icons/add-image-icon/add-image-icon.component';
import { ArchiveiconComponent } from './components/icons/archiveicon/archiveicon.component';
import { MoreiconComponent } from './components/icons/moreicon/moreicon.component';
import { NoteService } from 'src/app/services/note.service';
import {MatMenuModule} from '@angular/material/menu';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { NotesComponent } from './components/notes/notes.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreatenoteComponent,
    PinUnpinIconComponent,
    ReminderIconComponent,
    CollaboratorIconComponent,
    ColorPaletteIconComponent,
    AddImageIconComponent,
    ArchiveiconComponent,
    MoreiconComponent,
    DisplayNoteComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule
  ],
  providers: [HttpService, UserService,NoteService],
  bootstrap: [AppComponent]
})

export class AppModule { }
