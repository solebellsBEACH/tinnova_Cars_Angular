import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/types/Brand';
import { Vehicles } from 'src/app/types/Vehicles';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Vehicles[] = []
  countVehicles = 0
  isLastWeekFilter = false
  brandFilter: null | string = null
  brands: Brand[] = []
  isFiltered = false
  prefix = 'http://localhost:4200/'
  routes: { name: string, path: string }[] = [{ name: 'Login', path: `${this.prefix}auth` }, { name: 'Cadastrar veículo', path: `${this.prefix}createVehicle` }]
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getVehicles()
    this.getBrands()
  }
  getVehicles() {

    this.homeService.getVehicles().subscribe(e => {
      this.vehicles = e.vehicles
      this.countVehicles = e.count
    })
  }
  getBrands() {
    this.homeService.getBrands().subscribe(e => { this.brands = e.brands })
  }

  getVehiclesForBrands(id: number, name: string) {
    this.isFiltered = true
    this.brandFilter = name
    this.homeService.getVehiclesForBrand(id).subscribe(e => {
      this.vehicles = e.vehicles
      this.countVehicles = e.count
    })
  }

  removeFilters() {
    this.isFiltered = false
    this.getVehicles()
  }
  getVehiclesForDecade(){

  }
}
