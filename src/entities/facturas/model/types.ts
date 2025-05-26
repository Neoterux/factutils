declare const _secuencialSymb: unique symbol
declare const _threeDigitCodeSymb: unique symbol
export type ThreeDigitCode = `${bigint}` & { [_threeDigitCodeSymb]: string }
export type Secuencial = `${bigint}` & { [_secuencialSymb]: string }

export enum AmbienteSRI {
  Pruebas = '1',
  Produccion = '2',
}

interface DocumentoElectronico {
  codigoEstablecimiento: ThreeDigitCode
  codigoPuntoEmision: ThreeDigitCode
  secuencia: Secuencial
  fechaEmision: Date
  ambiente: AmbienteSRI
}

export type InfoImpuesto = {
  codigoImpuesto: string
  baseImponible: number
  valorImpuesto: number
  porcentaje: number
}

export interface DetalleFactura {
  codigo: string
  codigoAuxiliar?: string
  descripcion: string
  cantidad: number
  precioUnitario: number
  impuestos: InfoImpuesto[]
}

export interface Factura extends DocumentoElectronico {
  detalle: DetalleFactura[]
}
