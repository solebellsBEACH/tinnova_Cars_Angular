import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/types/Brand';
import { CreateVehicleService } from './create-vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {
  prefix = 'http://localhost:4200/'
  routes: { name: string, path: string }[] = [{ name: 'Login', path: `${this.prefix}auth` }, { name: 'Home', path: `${this.prefix}home` }]
  brands: Brand[] = []
  public cadastroForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    image: ['', [Validators.required]],
    color: ['', [Validators.required]],
    is_sold: [false, [Validators.required]],
    year: ['', [Validators.required, Validators.min(1970), Validators.max(2023)]],
    description: ['', [Validators.required]],
    brand_id: [6, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private createVehicleService: CreateVehicleService) { }

  ngOnInit(): void {
    this.getBrands()
  }
  getBrands() {
    this.createVehicleService.getBrands().subscribe(e => { this.brands = e.brands })
  }
  public submitForm() {
    console.log(this.cadastroForm.value)
  }

}
