import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      primary50: '#eff6ff',
      primary100: '#dbeafe',
      primary200: '#bfdbfe',
      primary300: '#93c5fd',
      primary400: '#60a5fa',
      primary500: '#3b82f6',
      primary600: '#2563eb',
      primary700: '#1d4ed8',
      primary800: '#1e40af',
      primary900: '#1e3a8a',

      infoLight: '#2dd4bf',
      infoBase: '#14b8a6',
      infoDark: '#0d9488',

      successLight: '#4ade80',
      successBase: '#22c55e',
      successDark: '#16a34a',

      warningLight: '#facc15',
      warningBase: '#eab308',
      warningDark: '#ca8a04',

      dangerLight: '#f87171',
      dangerBase: '#ef4444',
      dangerDark: '#dc2626',

      baseWhite: '#ffffff',
      baseBlack: '#000000',

      gray50: '#f9fafb',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',
      gray900: '#111827'
    },
    fontSizes: {
      xs: '.625rem',
      sm: '.75rem',
      md: '.875rem',
      lg: '1rem',
      xl: '1.125rem'
    }
  }
})
