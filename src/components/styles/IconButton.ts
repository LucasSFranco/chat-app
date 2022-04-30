import { css } from '../../styles'

export const IconButtonCSS = css({
  width: '1.5rem',
  height: '1.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '.125rem',
  color: '$gray800',
  fontSize: '$lg',

  '&:hover': {
    background: 'rgb(0 0 0 / 10%)'
  },

  variants: {
    success: {
      true: {
        color: '$successBase'
      }
    },
    danger: {
      true: {
        color: '$dangerBase'
      }
    }
  }
})
