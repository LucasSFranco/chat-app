import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { ButtonCSS } from './styles/Button'

const Button = styled('button', ButtonCSS)

export type ButtonProps = React.ComponentProps<typeof Button> & {
  loading?: boolean
}

const AppButton: React.FC<ButtonProps> = ({
  loading = false,
  className,
  children,
  ...props
}) => {
  return (
    <Button className={c('button', className)} {...props}>
      {
        loading ? (
          <div className="loading">
            <div className="dot" /> <div className="dot" /> <div className="dot" />
          </div>
        ) : (
          children
        )
      }
    </Button>
  )
}

export { AppButton as Button }
