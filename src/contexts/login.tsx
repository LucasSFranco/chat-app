import React, { createContext, useContext, useState } from 'react'

import { api } from '../services/api'

import { Loading, ValidationError } from '../types/common'
import { Credentials, LoginContextData } from '../types/login'
import { GlobalContext } from './global'

export const LoginContext = createContext({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
  const global = useContext(GlobalContext)

  const authenticate = global.authenticate

  const [credentials, setCredentials] = useState<Credentials>({
    email: {
      value: '',
      error: null
    },
    password: {
      value: '',
      error: null
    }
  })

  const [loading, setLoading] = useState<Loading>({})

  const handleChange = (value: any, name: keyof Credentials) => {
    setCredentials({
      ...credentials,
      [name]: { ...credentials[name], value }
    })
  }

  const signIn = async () => {
    setLoading({ ...loading, signIn: true })

    const data = Object.entries(credentials).reduce<any>((data, [name, field]) => ({ ...data, [name]: field.value }), {})
    try {
      const { accessToken } = await api.post('/auth/login', data) as any

      authenticate(accessToken)
    } catch (e: any) {
      const validationErrors: ValidationError[] = e

      const validatedCredentials = Object.entries(credentials)
        .reduce<Credentials>((validatedCredentials, [name, field]) => {
          const validationError = validationErrors.find(validationError => validationError.path.includes(name))

          return {
            ...validatedCredentials,
            [name]: { ...field, error: validationError }
          }
        }, credentials)

      setCredentials(validatedCredentials)
    }

    setLoading({ ...loading, signIn: false })
  }

  const state = {
    credentials,
    loading,
    handleChange,
    signIn
  }

  return (
    <LoginContext.Provider value={state}>
      { children }
    </LoginContext.Provider>
  )
}
