import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateVehicleComponent } from './pages/create-vehicle/create-vehicle.component';
import { CreateVehicleModule } from './pages/create-vehicle/create-vehicle.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CreateVehicleModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
