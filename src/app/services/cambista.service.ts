import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCambioConsultaRequest } from '../models/TipoCambioConsultaRequest';
import { environment } from 'src/environments/environment';
import { TipoCambioActualizarRequest } from '../models/TipoCambioActualizarRequest';
import { Credentials } from '../models/Credentials';
import { TokenResponse } from '../models/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class CambistaService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(request: Credentials): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${environment.apiLogin}`, request);
  }

  consultar(request: TipoCambioConsultaRequest): Observable<TipoCambioConsultaRequest>{
    return this.http.post<TipoCambioConsultaRequest>(`${environment.apiBase}`, request);
  }

  actualizarMonto(request: TipoCambioActualizarRequest): Observable<TipoCambioActualizarRequest> {
    return this.http.patch<TipoCambioActualizarRequest>(`${environment.apiBase}`, request);
  }
}
