import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public post(path: string, data: object) {
    return this.http.post(environment.baseUrl + path, data);
  }

  public get(path: string) {
    return this.http.get(environment.baseUrl + path);
  }

  public put(path: string, data) {
    return this.http.put(environment.baseUrl + path, data);
  }
  
  public delete(path: string, data){
    return this.http.delete(environment.baseUrl + path, data)
  }

}
