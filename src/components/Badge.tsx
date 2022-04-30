import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { BadgeCSS } from './styles/Badge'

const Badge = styled('div', BadgeCSS)

export type BadgeProps = React.ComponentProps<typeof Badge>

const AppBadge: React.FC<BadgeProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Badge className={c('badge', className)} {...props}>
      { children }
    </Badge>
  )
}

export { AppBadge as Badge }
