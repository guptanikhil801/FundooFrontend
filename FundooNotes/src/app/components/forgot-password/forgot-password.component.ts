import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  user: FormGroup;
  constructor(private userservice: UserService, private snackBar: MatSnackBar,
              private fb:FormBuilder) { }

  submitdata() {
    let data = {
      email:this.inputValue('email')
    }
    console.log(data);
    this.userservice.forgotpasswordapi(data).subscribe(
      response => {
        this.snackBar.open("Successfull", "a link has been sent to your email", {
          duration: 2500
        });
      },
      error => {
        this.snackBar.open("Failed", "fill email correctly", {
          duration: 2500
        });
      }
    );
  }
  inputValue(inputElement: any) {
    return this.user.get(inputElement).value;
  }
  ngOnInit() {
    this.user =this.fb.group({
      email:['',
        [Validators.required,Validators.email,Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$')]]
      });
  }

}
