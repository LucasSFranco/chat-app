import { css } from '../../styles'

export const FieldCSS = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem',

  '.label': {
    color: '$gray500',
    fontSize: '.625rem',
    fontWeight: 700,
    textTransform: 'uppercase',

    '&.message': {
      fontSize: '.625rem',
      fontWeight: 400,
      textTransform: 'none'
    }
  },

  '&.error': {
    '&.label': {
      color: '$dangerBase'
    }
  }
})
