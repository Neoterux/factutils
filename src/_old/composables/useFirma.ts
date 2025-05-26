import { shallowReactive } from 'vue'

export type DatosFirmaElectronica = {
  archivo?: Blob
  pwd?: string
}

const datos = shallowReactive<DatosFirmaElectronica>({
  archivo: undefined,
  pwd: undefined,
})

/**
 * Devuelve la instancia de los datos de la firma electronica que se debe utilizar para firmar documentos electrónicos.
 * @returns la instancia de los datos de la firma
 */
export function useDatosFirma() {
  return datos
}
