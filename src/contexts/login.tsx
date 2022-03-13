import React, { createContext, useState } from 'react'

import { api } from '../services/api'
import { socket } from '../services/socket'

import { Loading } from '../types/common'
import { Credentials, LoginContextData } from '../types/login'

export const LoginContext = createContext({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {
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

  const handleChange = (key: string, value: any) => {
    setCredentials({
      ...credentials,
      [key]: { ...credentials[key], value }
    })
  }

  const signIn = async () => {
    setLoading({ ...loading, signIn: true })

    const data = Object.entries(credentials).reduce<any>((data, [key, field]) => ({ ...data, [key]: field.value }), {})
    try {
      const { accessToken } = await api.post('/user/login', data) as any

      socket.auth = { bearerToken: `Bearer ${accessToken}` }
      socket.connect()
    } catch (e) {
      console.log(e)
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
