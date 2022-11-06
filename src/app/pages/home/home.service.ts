import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IGetVehicles } from './interfaces';




@Injectable()
export class HomeService {
  url = 'http://127.0.0.1:3333/'
  constructor(private http: HttpClient) { }

  helloWorld() {
    return this.http.get(`${this.url}`)
  }
  getVehicles() {
    return this.http.get<IGetVehicles>(`${this.url}vehicleListAll`)
  }
}
