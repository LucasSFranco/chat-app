import React, { createContext, useState } from 'react'

import { api } from '../services/api'

import { Loading, ValidationError } from '../types/common'
import { Credentials, RegisterContextData } from '../types/register'

export const RegisterContext = createContext({} as RegisterContextData)

export const RegisterProvider: React.FC = ({ children }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: {
      value: '',
      error: null
    },
    email: {
      value: '',
      error: null
    },
    password: {
      value: '',
      error: null
    },
    confirmPassword: {
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

  const signUp = async () => {
    setLoading({ ...loading, signUp: true })

    const data = Object.entries(credentials).reduce<any>((data, [name, field]) => ({ ...data, [name]: field.value }), {})
    try {
      await api.post('/auth/register', data)
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

    setLoading({ ...loading, signUp: false })
  }

  const state = {
    credentials,
    loading,
    handleChange,
    signUp
  }

  return (
    <RegisterContext.Provider value={state}>
      { children }
    </RegisterContext.Provider>
  )
}
