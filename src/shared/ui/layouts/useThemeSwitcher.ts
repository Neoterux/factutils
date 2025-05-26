import { useBodyAttribute } from 'shared/composables/dom/useBodyAttribute'
import { onMounted, readonly, shallowRef, type ShallowRef } from 'vue'
const APP_THEME_ATTR = 'app_theme'
type ThemeName = 'light' | 'dark'

export function useThemeSwitcher() {
  const currentTheme = useBodyAttribute(APP_THEME_ATTR)
  if (!currentTheme.value) {
    currentTheme.value = 'light'
  }
  return {
    themeName: readonly(currentTheme as ShallowRef<ThemeName>),
    toggle() {
      currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
    },
  }
}
