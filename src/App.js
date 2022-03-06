import { Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login'
import { Register } from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export { App }
