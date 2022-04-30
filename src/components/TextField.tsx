import React from 'react'
import c from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { styled } from '../styles'
import { TextFieldCSS } from './styles/TextField'

import { Icon } from './Icon'

const TextField = styled('div', TextFieldCSS)

export type TextFieldProps = Omit<React.ComponentProps<typeof TextField>, 'onChange'> & {
  name: string
  type?: string
  placeholder?: string
  icon?: IconProp
  onChange: (value: any, name?: string) => void
}

const AppTextField: React.FC<TextFieldProps> = ({
  name,
  type = 'text',
  placeholder,
  icon,
  className,
  onChange,
  ...props
}) => {
  const handleChange = (value: string) => onChange(value, name)

  return (
    <TextField className={c('text-field', className)} {...props}>
      <input
        className="input"
        style={{ paddingRight: icon ? '2.5rem' : '.75rem' }}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      { icon && <Icon icon={icon} /> }
    </TextField>
  )
}

export { AppTextField as TextField }
