import { css } from '../../styles'

export const FieldCSS = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem',

  '.label': {
    color: '$gray500',
    fontSize: '$xs',
    fontWeight: 700,
    textTransform: 'uppercase',

    '.message': {
      fontSize: '$xs',
      fontWeight: 400,
      textTransform: 'none'
    }
  },

  variants: {
    error: {
      true: {
        '.label': {
          color: '$dangerBase'
        }
      }
    }
  }
})
