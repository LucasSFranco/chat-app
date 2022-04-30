import { css } from '../../styles'

export const TabControllerCSS = css({
  height: '2.25rem',

  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',

  background: '$gray50',
  padding: '0 1rem'
})

export const TabControllerItemCSS = css({
  borderRadius: '.125rem',
  fontSize: '$sm',
  lineHeight: '.875rem',
  padding: '.125rem .5rem',

  variants: {
    style: {
      primary: {
        background: '$gray200',
        border: '1px solid $gray200',
        color: '$gray600'
      },
      success: {
        background: '$successBase',
        border: '1px solid $successBase',
        color: '$baseWhite'
      },
      danger: {
        background: '$dangerBase',
        border: '1px solid $dangerBase',
        color: '$baseWhite'
      }
    },
    selected: {
      true: {}
    }
  },

  compoundVariants: [
    {
      style: 'primary',
      selected: true,
      css: {
        background: '$primary400',
        border: '1px solid $primary400',
        color: '$baseWhite'
      }
    },
    {
      style: 'success',
      selected: true,
      css: {
        background: 'transparent',
        border: '1px solid $successBase',
        color: '$successBase'
      }
    },
    {
      style: 'danger',
      selected: true,
      css: {
        background: 'transparent',
        border: '1px solid $dangerBase',
        color: '$dangerBase'
      }
    }
  ],

  defaultVariants: {
    style: 'primary'
  }
})
