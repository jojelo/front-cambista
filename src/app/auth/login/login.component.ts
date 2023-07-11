import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Credentials } from 'src/app/models/Credentials';
import { CambistaService } from 'src/app/services/cambista.service';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credencials!: Credentials;

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CambistaService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  controlHasError(control: string, error: string): boolean {
    return this.formulario?.controls[control].hasError(error) == true;
  }

  login() {
    if(this.formulario.valid) {
      this.credencials = this.formulario.value;
      this.service.authenticate(this.credencials)
      .subscribe({
        next: (rs) => {
          this.tokenService.initToken(rs.token);
          console.log("exitoso");
          this.router.navigateByUrl('/cambista/consultar');
        },
        error:() => {}
      });
    }

  }

}
