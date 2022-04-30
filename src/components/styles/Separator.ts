import { css } from '../../styles'

export const SeparatorCSS = css({
  width: '100%',
  height: '1px',

  background: '$gray200',
  color: '$primary500',
  margin: '1rem 0',

  position: 'relative',

  '.badge': {
    background: '$gray200',
    borderRadius: '.125rem',
    color: '$gray700',
    fontSize: '$sm',
    padding: '0 .5rem',
    textTransform: 'uppercase',

    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)'
  },

  '.content': {
    background: '$baseWhite',
    color: '$gray400',
    fontSize: '$md',
    padding: '0 .25rem',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },

  variants: {
    highlight: {
      true: {
        background: '$primary500',

        '.badge': {
          background: '$primary500',
          color: '$baseWhite'
        },

        '.content': {
          color: '$primary500'
        }
      }
    }
  }
})
