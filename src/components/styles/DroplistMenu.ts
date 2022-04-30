import { css } from '../../styles'

export const DroplistMenuCSS = css({
  minWidth: '140px',

  background: '$baseWhite',
  borderRadius: '.125rem',
  color: '$baseWhite',
  boxShadow: '0 0 5px rgb(0 0 0 / 5%), 0 10px 10px rgb(0 0 0 / 5%)',
  fontSize: '$xs',
  padding: '.75rem 0',
  position: 'fixed',
  zIndex: 999
})

export const DroplistMenuItemCSS = css({
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',

  background: '$baseWhite',
  fontSize: '$md',
  lineHeight: '1rem',
  padding: '.5rem .75rem',

  '& .icon-wrapper': {
    width: '1.25rem',

    display: 'flex',
    justifyContent: 'center'
  },

  variants: {
    style: {
      regular: {
        color: '$gray500'
      },
      danger: {
        color: '$dangerBase'
      },
      success: {
        color: '$successBase'
      }
    }
  },

  defaultVariants: {
    style: 'regular'
  }
})

export const DroplistMenuSeparatorCSS = css({
  width: '100%',
  height: '1px',

  background: '#gray200'
})
