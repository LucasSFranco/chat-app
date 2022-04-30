import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { GlobalContext } from '../contexts/global'
import { Loading } from '../views/Loading'
import { routes } from '../views/routes'

const PublicRoute: React.FC<any> = ({ children }) => {
  const global = useContext(GlobalContext)

  const auth = global.auth
  const loading = global.loading

  if (loading)
    return <Loading />

  if (auth)
    return <Navigate to={routes.chats} replace />

  return children
}

export { PublicRoute }
