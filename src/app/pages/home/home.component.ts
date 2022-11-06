import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/types/Brand';
import { Vehicles } from 'src/app/types/Vehicles';
import { HomeService } from './home.service';
import { IGetVehicles } from './interfaces';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Vehicles[] = []
  brands: Brand[] = []
  prefix = 'http://localhost:4200/'
  routes: { name: string, path: string }[] = [{ name: 'Login', path: `${this.prefix}auth` }, { name: 'Cadastrar veículo', path: `${this.prefix}auth` }]
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getVehicles()
    this.getBrands()
  }
  getVehicles() {
    this.homeService.getVehicles().subscribe(e => { this.vehicles = e.vehicles })
  }
  getBrands() {
    this.homeService.getBrands().subscribe(e => { this.brands = e.brands })
  }
}
