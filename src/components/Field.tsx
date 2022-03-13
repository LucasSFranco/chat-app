import React from 'react'

import { styled } from '../styles'
import { FieldCSS } from './styles/Field'

const Field = styled('div', FieldCSS)

export type FieldProps = React.ComponentProps<typeof Field> & {
  label: string
  error?: string
}

const AppField: React.FC<FieldProps> = ({
  label = '',
  error,
  children,
  ...props
}) => {
  return (
    <Field className="field" {...props}>
      <label className="label">
        { label }
        { error && <span className="message"> - { error }</span> }
      </label>
      { children }
    </Field>
  )
}

export { AppField as Field }
