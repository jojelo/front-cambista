import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoCambioActualizarRequest } from 'src/app/models/TipoCambioActualizarRequest';
import { CambistaService } from 'src/app/services/cambista.service';

interface ValorActual {
  id: string;
  value: string;
}

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {


  formulario!: FormGroup;
  public tipoCambioActualizarRequest!: TipoCambioActualizarRequest;

  constructor(
    private formBuilder: FormBuilder,
    private service: CambistaService,
  ) {
    this.formulario = this.formBuilder.group({
      monto: ['', [Validators.required]],
      id: ['',[Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  controlHasError(control: string, error: string): boolean {
    return this.formulario?.controls[control].hasError(error) == true;
  }

  valorActual: ValorActual[] = [
    {id: '1', value: 'Soles - Dolares'},
    {id: '2', value: 'Dolares - Soles'},
  ];

  actualizarData() {
    if(this.formulario.valid) {
      this.tipoCambioActualizarRequest = this.formulario.value;
      this.service.actualizarMonto(this.tipoCambioActualizarRequest)
      .subscribe({
        next: () => {
          console.log("exitoso");
          window.alert("se actualizo con exito");
        },
        error:() => {}
      });
    }
  }
}
