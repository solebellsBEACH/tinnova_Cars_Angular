import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVehicleComponent } from './create-vehicle.component';
import { CreateVehicleHeaderComponent } from './components/create-vehicle-header/create-vehicle-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'

@NgModule({
  declarations: [
    CreateVehicleComponent,
    CreateVehicleHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class CreateVehicleModule { }
