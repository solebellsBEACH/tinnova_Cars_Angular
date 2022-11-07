import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public loading: boolean = false;
  public cadastroForm: FormGroup = this.formBuilder.group({
    password: ['passwordNeymar', [Validators.required, Validators.minLength(5)]],
    email: ['emailNeymar@gmail.com', [Validators.required, Validators.email]]
  });
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public submitForm(e: SubmitEvent) {
    e.preventDefault();
    if (this.cadastroForm.valid) {
      this.authService.login(this.cadastroForm.value).subscribe(data => {
        localStorage.setItem('token', data.token)
        this.router.navigate(['home']);
      }, error => { alert('Algo deu errado em seu login') })

    } else {
      alert('Formulario Inválido')
    }
  }
}
