import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService) { }

  public loginapi(data: object) {
    return this.httpservice.post("api/user/login", data)
  }

  public registrationapi(data: object) {
    return this.httpservice.post("api/user/userSignUp", data)
  }

  public forgotpasswordapi(data: object) {
    return this.httpservice.post("api/user/reset", data)
  }

  public resetpasswordapi(data: object) {
    return this.httpservice.post("api/user/reset-password", data)
  }

}
