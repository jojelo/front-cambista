import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'consultar',
        component: ConsultaComponent
      },
      {
        path: 'actualizar',
        component: ActualizarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CambistaRoutingModule { }
