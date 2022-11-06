import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {
  prefix = 'http://localhost:4200/'
  routes: { name: string, path: string }[] = [{ name: 'Login', path: `${this.prefix}auth` }, { name: 'Home', path: `${this.prefix}home` }]

  public cadastroForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    image: ['', [Validators.required]],
    color: ['', [Validators.required]],
    is_sold: [false, [Validators.required]],
    year: ['', [Validators.required, Validators.min(1970), Validators.max(2023)]],
    description: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  public submitForm() {
  }
}
