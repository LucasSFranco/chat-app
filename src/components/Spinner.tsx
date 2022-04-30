import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { SpinnerCSS } from './styles/Spinner'

const Spinner = styled('svg', SpinnerCSS)

export type SpinnerProps = React.ComponentProps<typeof Spinner> & {
  badge?: string
}

const AppSpinner: React.FC<SpinnerProps> = ({
  className,
  badge,
  children,
  ...props
}) => {
  return (
    <Spinner className={c('spinner', className)} viewBox="0 0 50 50" {...props}>
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </Spinner>
  )
}

export { AppSpinner as Spinner }
