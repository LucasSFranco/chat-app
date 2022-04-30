import React from 'react'
import c from 'classnames'
import { Link as RouterLink } from 'react-router-dom'

import { styled } from '../styles'
import { LinkCSS } from './styles/Link'

const Link = styled(RouterLink, LinkCSS)

export type LinkProps = React.ComponentProps<typeof Link>

const AppLink: React.FC<LinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link className={c('link', className)} {...props}>
      { children }
    </Link>
  )
}

export { AppLink as Link }
