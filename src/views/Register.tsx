import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { RegisterContext } from '../contexts/register'
import { routes } from './routes'

import { Button } from '../components/Button'
import { Field } from '../components/Field'
import { Link } from '../components/Link'
import { TextField } from '../components/TextField'

const Register: React.FC = () => {
  const { t } = useTranslation(['register'])
  const register = useContext(RegisterContext)

  const credentials = register.credentials
  const loading = register.loading

  const handleChange = register.handleChange
  const signUp = register.signUp

  return (
    <main className="[ register ] w-full h-full flex items-center justify-center">
      <div className="p-4 w-full">
        <h3 className="font-bold text-gray-800 text-center mb-2">{ t('register:title') }</h3>
        <h6 className="text-gray-500 text-center mb-16">{ t('register:subtitle') }</h6>
        <div className="grid gap-4">
          <Field label={t('register:username')} error={credentials.username.error?.message}>
            <TextField
              name="username"
              icon="user"
              error={!!credentials.username.error}
              onChange={handleChange}
            />
          </Field>
          <Field label={t('register:email')} error={credentials.email.error?.message}>
            <TextField
              name="email"
              icon="envelope"
              error={!!credentials.email.error}
              onChange={handleChange}
            />
          </Field>
          <Field label={t('register:password')} error={credentials.password.error?.message}>
            <TextField
              name="password"
              icon="lock"
              type="password"
              error={!!credentials.password.error}
              onChange={handleChange}
            />
          </Field>
          <Field label={t('register:confirm-password')} error={credentials.confirmPassword.error?.message}>
            <TextField
              name="confirmPassword"
              type="password"
              error={!!credentials.confirmPassword.error}
              onChange={handleChange}
            />
          </Field>
          <div className="grid gap-3">
            <Button loading={loading.signUp} onClick={signUp}>{ t('register:register-btn') }</Button>
            <Link className="text-sm text-center" to={routes.login}>
              { t('register:to-login') }
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export { Register }
