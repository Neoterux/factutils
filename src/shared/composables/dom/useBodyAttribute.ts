import { useAttribute } from './useAttribute'

export function useBodyAttribute(attributeName: string) {
  return useAttribute(document.body, attributeName)
}
