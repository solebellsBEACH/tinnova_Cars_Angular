import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/types/Brand';
import { Vehicles } from 'src/app/types/Vehicles';
import { CreateVehicleService } from '../create-vehicle/create-vehicle.service';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  vehicles: Vehicles[] = []
  countVehicles = 0
  isAnotherFilters = false
  brandFilter: null | string = null
  brands: Brand[] = []
  isFiltered = false
  prefix = 'http://localhost:4200/'
  routes: { name: string, path: string }[] = [{ name: 'Login', path: `${this.prefix}auth` }, { name: 'Cadastrar veículo', path: `${this.prefix}createVehicle` }]
  public decadeForm: FormGroup = this.formBuilder.group({
    decade: [1970, Validators.required]
  });

  constructor(private homeService: HomeService, private formBuilder: FormBuilder, private createVehicleService: CreateVehicleService) { }

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
    this.isAnotherFilters = false
    this.getVehicles()
  }
  getVehiclesForDecade(e: SubmitEvent) {
    e.preventDefault()
    if (this.decadeForm.valid) {
      this.homeService.getVehiclesByDecade(this.decadeForm.value.decade)
        .subscribe(
          data => {
            this.decadeForm.reset()
            this.isAnotherFilters = true
            this.vehicles = data.vehicles
          },
          error => alert('Ops, erro buscar veículos! '))
    } else { alert('Insira um valor válido') }
  }

  getNotSoldVehicles(){
    this.homeService.getNotSoldVehicles()
        .subscribe(
          data => {
            this.decadeForm.reset()
            this.isAnotherFilters = true
            this.vehicles = data.vehicles
          },
          error => alert('Ops, erro buscar veículos! '))
  }
}
