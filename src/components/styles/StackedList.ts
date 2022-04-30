import { css } from '../../styles'

export const StackedListCSS = css({
  background: '$baseWhite'
})

export const StackedListItemCSS = css({
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',

  background: '$baseWhite',
  borderBottom: '1px solid $gray200',
  padding: '.5rem 1rem'
})
