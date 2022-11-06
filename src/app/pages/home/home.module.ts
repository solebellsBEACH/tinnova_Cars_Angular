import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class HomeModule { }
