export interface TipoCambioConsultaRequest {
  monto: number;
  monedaOrigen: string;
  monedaDestino: string;
  montoConTipoCambio: number;
  tipoCambio: number;
}
