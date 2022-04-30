
import React, { createContext, useEffect, useState } from 'react'

import { GlobalContextData } from '../types/global'
import { api } from '../services/api'
import { socket } from '../services/socket'

export const GlobalContext = createContext({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const authenticate = (accessToken: string) => {
    setAuth(accessToken)

    api.defaults.headers.common.authorization = accessToken

    socket.auth = { bearerToken: `Bearer ${accessToken}` }
    socket.connect()
  }

  const refreshToken = async () => {
    const data = await api.get('/auth/refresh-token') as any
    authenticate(data?.accessToken)
    setLoading(false)

    if (data)
      setTimeout(() => refreshToken(), 3600000)
  }

  useEffect(() => { refreshToken() }, [])

  const state = { auth, loading, authenticate }

  return (
    <GlobalContext.Provider value={state}>
      { children }
    </GlobalContext.Provider>
  )
}
