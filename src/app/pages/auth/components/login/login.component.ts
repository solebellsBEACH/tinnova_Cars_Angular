import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../auth.component.scss', './login.component.scss']
})


export class LoginComponent implements OnInit {
  public loading: boolean = false;
  public cadastroForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  public submitForm() {
    if (this.cadastroForm.valid) {
      this.loading = true
      this.router.navigate(['home']);
    } else {
      alert('Formulario Inválido')
    }
  }

}
