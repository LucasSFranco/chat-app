import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { SeparatorCSS } from './styles/Separator'

const Separator = styled('div', SeparatorCSS)

export type SeparatorProps = React.ComponentProps<typeof Separator> & {
  badge?: string
}

const AppSeparator: React.FC<SeparatorProps> = ({
  className,
  badge,
  children,
  ...props
}) => {
  return (
    <Separator className={c('separator', className)} {...props}>
      { badge && <div className="badge">{ badge }</div> }
      { children && <div className="content">{ children }</div> }
    </Separator>
  )
}

export { AppSeparator as Separator }
