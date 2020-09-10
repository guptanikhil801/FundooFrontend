import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: FormGroup;;
  constructor(
    private userservice: UserService,
    private router: Router, private fb:FormBuilder, private snackBar: MatSnackBar
  ) { }

  validation() {
    let data = {
      email: this.inputValue('email'),
      password: this.inputValue('password')
    }
    this.userservice.loginapi(data).subscribe(
      response => {
        this.snackBar.open("Successfull", "Login",  {
          duration: 2500
        });
        localStorage.setItem('token', response['id']); 
        localStorage.setItem('email', response['email']);
        localStorage.setItem('name', response['firstName']+ " " + response['lastName'] );
        localStorage.setItem('profilePic', response['imageUrl']);
        this.router.navigate(['/dashboard']);
      },
     error => {
       this.snackBar.open("Failed", "Login",  {
      duration: 2500
    });
    }
    );
  }
  inputValue(inputElement: any) {
    return this.user.get(inputElement).value;
  }

  ngOnInit(): void {
    this.user =this.fb.group({
      email:['',
        [Validators.required,Validators.email,Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$')]],
      password:['',
        [Validators.required,Validators.pattern('^([a-z0-9]+)')]]});
  }

}
