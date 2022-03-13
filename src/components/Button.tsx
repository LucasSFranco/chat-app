import React from 'react'

import { styled } from '../styles'
import { ButtonCSS } from './styles/Button'

const Button = styled('button', ButtonCSS)

export type ButtonProps = React.ComponentProps<typeof Button> & {
  loading?: boolean
}

const AppButton: React.FC<ButtonProps> = ({
  loading = false,
  children,
  ...props
}) => {
  return (
    <Button className="button" {...props}>
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
