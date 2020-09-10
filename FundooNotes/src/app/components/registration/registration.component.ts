import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { error } from 'console';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userform: FormGroup;
  constructor(private fb: FormBuilder,
    private userservice: UserService, private snackBar: MatSnackBar,
    private router: Router) { }

  validation() {
    let data = {
      firstName: this.inputValue('firstName'),
      lastName: this.inputValue('lastName'),
      email: this.inputValue('email'),
      password: this.inputValue('password'),
      service: 'advance'
    }
    this.userservice.registrationapi(data).subscribe(
      response => {
        this.snackBar.open("Successfull", "Registration", {
          duration: 2500
        });
        this.router.navigate(['/login'])
      },
      error => {
        this.snackBar.open("Failed", "Registration", {
          duration: 2500
        });
      }
    );
  }
  inputValue(inputElement: any) {
    return this.userform.get(inputElement).value;
  }

  ngOnInit(): void {
    this.userform = this.fb.group({
      firstName: ['',
        [Validators.required, Validators.pattern('^[a-zA-z]+')]],
      lastName: ['',
        [Validators.required, Validators.pattern('^[a-zA-z]+')]],
      email: ['',
        [Validators.required, Validators.email, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$')]],
      password: ['',
        [Validators.required, Validators.pattern('^([a-z0-9]+)')]],
      confirmPassword: ['',
        [Validators.required, Validators.pattern('^([a-z0-9]+)')]]
    });
  }

}
