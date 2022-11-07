import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeService } from './home.service';
import { IsSoldComponent } from './components/is-sold/is-sold.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    IsSoldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
        ReactiveFormsModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
