import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGetBrands } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreateVehicleService {
  url = 'http://127.0.0.1:3333/'
  constructor(private http: HttpClient) { }

  helloWorld() {
    return this.http.get(`${this.url}`)
  }
  getBrands() {
    return this.http.get<IGetBrands>(`${this.url}brandListAll`)
  }
}
