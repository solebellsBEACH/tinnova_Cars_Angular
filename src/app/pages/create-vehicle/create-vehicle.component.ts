import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/types/Brand';
import { Vehicles } from 'src/app/types/Vehicles';
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
    name: ['CarroTest', Validators.required],
    image: ['https://classic.exame.com/wp-content/uploads/2022/09/1024x768-2022_07_Ferrari_SP51_6-e1664397060617.jpg?quality=70&strip=info&w=935', [Validators.required]],
    color: ['red', [Validators.required]],
    is_sold: [false, [Validators.required]],
    year: [2002, [Validators.required, Validators.min(1970), Validators.max(2023)]],
    description: ['dd', [Validators.required]],
    brand_id: [6, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private createVehicleService: CreateVehicleService) { }
  public loading = false
  ngOnInit(): void {
    this.getBrands()
  }
  getBrands() {
    this.createVehicleService.getBrands().subscribe(e => { this.brands = e.brands })
  }
  postVehicle(body: Vehicles) {
    return this.createVehicleService.postVehicle(body).subscribe(
      data => alert('Cadastro realizado com sucesso '),
      error => alert('Ops, erro ao cadastrar veículo! '))
  }
  public submitForm() {
    if (this.cadastroForm.valid) {
      this.postVehicle(this.cadastroForm.value)
    } else {
      alert('Formulario Inválido')
    }
  }

}
