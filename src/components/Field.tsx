import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { FieldCSS } from './styles/Field'

const Field = styled('div', FieldCSS)

export type FieldProps = Omit<React.ComponentProps<typeof Field>, 'error'> & {
  label: string
  error?: string
}

const AppField: React.FC<FieldProps> = ({
  label = '',
  error,
  className,
  children,
  ...props
}) => {
  return (
    <Field className={c('field', className)} error={!!error} {...props}>
      <label className="label">
        { label }
        { error && <span className="message"> - { error }</span> }
      </label>
      { children }
    </Field>
  )
}

export { AppField as Field }
