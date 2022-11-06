import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {
  prefix = 'http://localhost:4200/'
  routes: { name: string, path: string }[] = [{ name: 'Login', path: `${this.prefix}auth` }, { name: 'Home', path: `${this.prefix}home` }]
  constructor() { }

  ngOnInit(): void {
  }

}
