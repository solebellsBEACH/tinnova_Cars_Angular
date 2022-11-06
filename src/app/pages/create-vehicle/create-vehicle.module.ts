import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVehicleComponent } from './create-vehicle.component';
import { CreateVehicleHeaderComponent } from './components/create-vehicle-header/create-vehicle-header.component';


@NgModule({
  declarations: [
    CreateVehicleComponent,
    CreateVehicleHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreateVehicleModule { }
