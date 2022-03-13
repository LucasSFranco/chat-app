import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { RegisterContext } from '../contexts/register'
import { i18n } from '../i18n'
import { routes } from './routes'

import { Button } from '../components/Button'
import { Field } from '../components/Field'
import { Link } from '../components/Link'
import { TextField } from '../components/TextField'

const Register: React.FC = () => {
  const register = useContext(RegisterContext)

  const handleChange = register.handleChange
  const signUp = register.signUp

  return (
    <div className="[ register ] w-full h-full flex items-center justify-center">
      <div className="p-4 w-full">
        <h3 className="font-bold text-gray-800 text-center mb-2">{ i18n.t('register:title') }</h3>
        <h6 className="text-gray-500 text-center mb-16">{ i18n.t('register:subtitle') }</h6>
        <div className="grid gap-4">
          <Field label={i18n.t('register:username')}>
            <TextField key="username" _onChange={handleChange} />
          </Field>
          <Field label={i18n.t('register:email')}>
            <TextField key="email" _onChange={handleChange} />
          </Field>
          <Field label={i18n.t('register:password')}>
            <TextField key="password" type="password" _onChange={handleChange} />
          </Field>
          <Field label={i18n.t('register:confirm-password')}>
            <TextField key="confirmPassword" type="password" _onChange={handleChange} />
          </Field>
          <div className="grid gap-3">
            <Button onClick={signUp}>{ i18n.t('register:register-btn') }</Button>
            <RouterLink className="text-sm text-center" to={routes.login}>
              <Link className="ml-1">{ i18n.t('register:to-login') }</Link>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Register }
