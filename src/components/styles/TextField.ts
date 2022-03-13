import { css } from '../../styles'

export const TextFieldCSS = css({
  display: 'flex',
  alignItems: 'center',

  background: '$gray50',
  border: '1px solid $gray200',
  borderRadius: '.125rem',
  color: '$gray600',
  position: 'relative',
  transition: 'border-color 250ms, color 250ms',

  '& .input': {
    outline: 'none',

    width: '100%',

    color: 'inherit',
    padding: '.625rem .75rem',
    fontFamily: 'inherit',
    fontSize: '.875rem',
    lineHeight: '1rem'
  },

  '& .icon': {
    pointerEvents: 'none',

    position: 'absolute',
    right: '.75rem'
  },

  '&:focus-within': {
    borderColor: '$primary500',
    color: '$gray700'
  },

  variants: {
    error: {
      true: {
        borderColor: '$dangerBase'
      }
    }
  }
})
