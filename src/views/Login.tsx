import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { LoginContext } from '../contexts/login'
import { routes } from './routes'

import { Button } from '../components/Button'
import { Field } from '../components/Field'
import { Link } from '../components/Link'
import { TextField } from '../components/TextField'

const Login: React.FC = () => {
  const { t } = useTranslation(['login'])
  const login = useContext(LoginContext)

  const credentials = login.credentials
  const loading = login.loading

  const handleChange = login.handleChange
  const signIn = login.signIn

  return (
    <main className="[ login ] w-full h-full flex items-center justify-center">
      <div className="p-4 w-full">
        <h3 className="font-bold text-gray-800 text-center mb-2">{ t('login:title') }</h3>
        <h6 className="text-gray-500 text-center mb-16">{ t('login:subtitle') }</h6>
        <div className="grid gap-4">
          <Field label={t('login:email')} error={credentials.email.error?.message}>
            <TextField
              name="email"
              icon="envelope"
              error={!!credentials.email.error}
              onChange={handleChange}
            />
          </Field>
          <Field label={t('login:password')} error={credentials.password.error?.message}>
            <TextField
              name="password"
              icon="lock"
              type="password"
              error={!!credentials.password.error}
              onChange={handleChange}
            />
          </Field>
          <div className="grid gap-3">
            <Button loading={loading.signIn} onClick={signIn}>{ t('login:login-btn') }</Button>
            <p className="text-gray-600 text-sm text-center">
              { t('login:no-account') }
              <Link className="ml-1" to={routes.register}>
                { t('login:to-register') }
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export { Login }
