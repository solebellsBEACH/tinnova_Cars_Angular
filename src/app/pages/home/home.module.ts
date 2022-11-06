import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HomeService } from './home.service';
import { IsSoldComponent } from './components/is-sold/is-sold.component';
import { BrandsContentComponent } from './components/brands-content/brands-content.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductItemComponent,
    IsSoldComponent,
    BrandsContentComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [HomeService]
})
export class HomeModule { }
