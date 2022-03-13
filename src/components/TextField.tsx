import React from 'react'

import { styled } from '../styles'
import { TextFieldCSS } from './styles/TextField'

const TextField = styled('div', TextFieldCSS)

export type TextFieldProps = React.ComponentProps<typeof TextField> & {
  key: string
  type?: string
  _onChange: (key: string, value: any) => void
}

const AppTextField: React.FC<TextFieldProps> = ({
  key,
  type = 'text',
  _onChange,
  ...props
}) => {
  const handleChange = (value) => { _onChange(key, value) }

  return (
    <TextField className="text-field" {...props}>
      <input
        className="input"
        type={type}
        onChange={(e) => handleChange(e.target.value)}
      />
    </TextField>
  )
}

export { AppTextField as TextField }
