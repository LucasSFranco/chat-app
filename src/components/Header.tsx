import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { HeaderCSS } from './styles/Header'

const Header = styled('div', HeaderCSS)

export type HeaderProps = React.ComponentProps<typeof Header>

const AppHeader: React.FC<HeaderProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Header className={c('header', className)} {...props}>
      { children }
    </Header>
  )
}

export { AppHeader as Header }
