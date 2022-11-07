import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResponse, IUserLogin } from 'src/app/types/interfaces';

@Injectable()
export class AuthService {

  url = 'http://127.0.0.1:3333/'
  constructor(private http: HttpClient) { }

  helloWorld() {
    return this.http.get(`${this.url}`)
  }
  login(body: IUserLogin) {
    return this.http.post<ILoginResponse>(`${this.url}session`, body)
  }
}
