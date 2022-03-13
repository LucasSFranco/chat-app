import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { LoginContext } from '../contexts/login'
import { i18n } from '../i18n'
import { routes } from './routes'

import { Button } from '../components/Button'
import { Field } from '../components/Field'
import { Link } from '../components/Link'
import { TextField } from '../components/TextField'

const Login: React.FC = () => {
  const login = useContext(LoginContext)

  const handleChange = login.handleChange
  const signIn = login.signIn

  return (
    <div className="[ login ] w-full h-full flex items-center justify-center">
      <div className="p-4 w-full">
        <h3 className="font-bold text-gray-800 text-center mb-2">{ i18n.t('login:title') }</h3>
        <h6 className="text-gray-500 text-center mb-16">{ i18n.t('login:subtitle') }</h6>
        <div className="grid gap-4">
          <Field label={i18n.t('login:email')}>
            <TextField key="email" _onChange={handleChange} />
          </Field>
          <Field label={i18n.t('login:password')}>
            <TextField key="password" type="password" _onChange={handleChange} />
          </Field>
          <div className="grid gap-3">
            <Button onClick={signIn}>{ i18n.t('login:login-btn') }</Button>
            <p className="text-gray-600 text-sm text-center">
              { i18n.t('login:no-account') }
              <RouterLink to={routes.register}>
                <Link className="ml-1">{ i18n.t('login:to-register') }</Link>
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Login }
