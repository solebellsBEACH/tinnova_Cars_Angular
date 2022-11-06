import { Component, OnInit } from '@angular/core';
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
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getVehicles()
  }
  getVehicles() {
    this.homeService.getVehicles().subscribe(e => { this.vehicles = e.vehicles })
  }
}
