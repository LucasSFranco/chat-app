import React, { forwardRef } from 'react'
import c from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { styled } from '../styles'
import { IconButtonCSS } from './styles/IconButton'

import { Icon } from './Icon'

const IconButton = styled('button', IconButtonCSS)

export type IconButtonProps = React.ComponentProps<typeof IconButton> & {
  icon: IconProp
}

const AppIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  icon,
  className,
  ...props
}, ref) => {
  return (
    <IconButton ref={ref} className={c('icon-button', className)} {...props}>
      <Icon icon={icon} />
    </IconButton>
  )
})

export { AppIconButton as IconButton }
