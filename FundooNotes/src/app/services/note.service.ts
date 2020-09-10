import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  constructor(private http: HttpClient) { }
  header = {
    headers: new HttpHeaders()
      .set('Authorization',  `${localStorage.token}`)
  }
  createnoteapi(data:object){
    return this.http.post(environment.baseUrl+"api/notes/addNotes",data,this.header);
  }

}
