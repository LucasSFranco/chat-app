import React from 'react'

import { styled } from '../styles'
import { LinkCSS } from './styles/Link'

const Link = styled('a', LinkCSS)

export type LinkProps = React.ComponentProps<typeof Link>

const AppLink: React.FC<LinkProps> = ({
  children,
  ...props
}) => {
  return (
    <Link className="link" {...props}>
      { children }
    </Link>
  )
}

export { AppLink as Link }
