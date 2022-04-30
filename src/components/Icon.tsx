import React from 'react'
import c from 'classnames'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { styled } from '../styles'
import { IconCSS } from './styles/Icon'

library.add(fas)

const Icon = styled(FontAwesomeIcon, IconCSS)

export type IconProps = React.ComponentProps<typeof Icon>

const AppIcon: React.FC<IconProps> = ({
  className,
  ...props
}) => {
  return (
    <Icon className={c('icon', className)} {...props} />
  )
}

export { AppIcon as Icon }
