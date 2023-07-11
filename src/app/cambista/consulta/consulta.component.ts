import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoCambioConsultaRequest } from 'src/app/models/TipoCambioConsultaRequest';
import { CambistaService } from 'src/app/services/cambista.service';


interface MonedaOrigen {
  key: string;
  value: string;
}

interface MonedaDestino {
  key: string;
  value: string;
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})

export class ConsultaComponent implements OnInit {

  formulario!: FormGroup;
  public tipoCambioConsultaRequest!: TipoCambioConsultaRequest;

  constructor(
    private formBuilder: FormBuilder,
    private cambistaService: CambistaService,
  ) {
    this.formulario = this.formBuilder.group({
      monto: [, [Validators.required]],
      monedaOrigen: [, [Validators.required]],
      monedaDestino: [, [Validators.required]],
      montoConTipoCambio: [''],
      tipoCambio: [''],
    });
  }

  ngOnInit(): void {
  }

  controlHasError(control: string, error: string): boolean {
    return this.formulario?.controls[control].hasError(error) == true;
  }

  monedaOrigen: MonedaOrigen[] = [
    {key: '1', value: 'Soles'},
    {key: '2', value: 'Dolares'},
  ];

  monedaDestino: MonedaDestino[] = [
    {key: '1', value: 'Soles'},
    {key: '2', value: 'Dolares'},
  ];

  consultar() {
    if(this.formulario.valid) {
      this.tipoCambioConsultaRequest = this.formulario.value;
      console.log('tipoCambioConsultaRequest', this.tipoCambioConsultaRequest);
      this.cambistaService.consultar(this.tipoCambioConsultaRequest)
      .subscribe({
        next: (value) => {
          //this.formulario.reset();
          console.log("exitoso");
          this.formulario.get("monto")?.setValue(value.monto);
          this.formulario.get("monedaOrigen")?.setValue(value.monedaOrigen);
          this.formulario.get("monedaDestino")?.setValue(value.monedaDestino);
          this.formulario.get("montoConTipoCambio")?.setValue(value.montoConTipoCambio);
          this.formulario.get("tipoCambio")?.setValue(value.tipoCambio);
        },
        error:() => {}
      })
    }
  }
}
