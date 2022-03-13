import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { routes } from './views/routes'
import { Login } from './views/Login'
import { Register } from './views/Register'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.register} element={<Register />} />
    </Routes>
  )
}

export { App }
