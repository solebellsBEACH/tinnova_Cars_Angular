import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HomeService } from './home.service';
import { IsSoldComponent } from './components/is-sold/is-sold.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductItemComponent,
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
