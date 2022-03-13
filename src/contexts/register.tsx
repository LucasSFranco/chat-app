import React, { createContext, useState } from 'react'

import { api } from '../services/api'

import { Loading } from '../types/common'
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

  const handleChange = (key: string, value: any) => {
    setCredentials({
      ...credentials,
      [key]: { ...credentials[key], value }
    })
  }

  const signUp = async () => {
    setLoading({ ...loading, signUp: true })

    const data = Object.entries(credentials).reduce<any>((data, [key, field]) => ({ ...data, [key]: field.value }), {})
    try {
      await api.post('/user/register', data)
    } catch (e) {
      console.log(e)
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
