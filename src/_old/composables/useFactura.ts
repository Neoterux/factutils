export interface DocumentoElectronico {
  establecimiento: string
  puntoEmision: string
  secuencial: string
  numeroAutorizacion: string
}

export interface HasInformacionTributaria {
  ruc: string
}

export enum CodigoImpuesto {
  Cero = '',
  Exento = '',
  Quince = '',
  Ocho = '',
  Doce = '',
  Catorce = '',
  Trece = '',
}

export enum TipoEmision {
  Normal = '1',
}

export enum TipoIdentificacion {
  RUC = '04',
  Cedula = '05',
  Pasaporte = '06',
  ConsumidorFinal = '07',
  IdentificacionExtranjero = '08',
}

export enum EstadoComprobanteElectronico {
  Procesamiento = 'PPR',
  Autorizado = 'AUT',
  NoAutorizado = 'NAT',
}

export enum TipoAmbiente {
  Normal = '1',
  Prueba = '2',
}
export type SubtotalImpuesto = { codigo: CodigoImpuesto; baseImponible: number; valor: number }

export interface HasResumenImpuesto {
  subtotalSinImpuesto: number
  detalleImpuesto: SubtotalImpuesto[]
}
export interface DetalleFactura {
  codigo: string
  codigoAuxiliar?: string
  descripcion: string
  cantidad: number
  precio: number
  descuento?: number
  impuestos: SubtotalImpuesto[]
}
export interface HasInformacionAdicional {
  campos: CampoInformacionAdicional[]
}
export interface CampoInformacionAdicional {
  clave: string
  valor: string
}

/**
 * Version local de factura electrónica
 * Corresponde a la versión 1.0.0 del SRI
 */
export interface Factura extends DocumentoElectronico {
  detalle: DetalleFactura[]
}

export function useFactura() {}
