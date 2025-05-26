import { shallowRef, watch, type ShallowRef, type MaybeRef, unref, isRef, computed } from 'vue'

export type AttributeOptions = {
  default?: string | null
}

/**
 *
 * @param element El elemento a inspeccionar
 * @param attributeName el nombre del atributo HTML a obtener
 * @param options
 * @returns el valor del atributo
 */
export function useAttribute(element: Element, attributeName: string, options?: AttributeOptions) {
  const attributeContent = shallowRef<string | null>(unref(element).getAttribute(attributeName))
  watch(attributeContent, (newContent) => {
    if (newContent == null) {
      unref(element).removeAttribute(attributeName)
      return
    }
    unref(element).setAttribute(attributeName, newContent)
  })

  return attributeContent
}
