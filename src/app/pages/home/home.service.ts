import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IGetBrands, IGetVehicles } from '../../types/interfaces';


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
  getBrands() {
    return this.http.get<IGetBrands>(`${this.url}brandListAll`)
  }
  getVehiclesForBrand(id: number) {
    return this.http.get<IGetVehicles>(`${this.url}vehicle?brand_id=${id}`)
  }
  getVehiclesByDecade(decade: number) {
    return this.http.get<IGetVehicles>(`${this.url}vehicleByDecade/${decade}`)
  }
}
