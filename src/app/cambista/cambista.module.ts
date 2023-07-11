import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambistaRoutingModule } from './cambista-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultaComponent,
    ActualizarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CambistaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CambistaModule { }
