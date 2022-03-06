import { useState } from 'react'
import { api } from '../services/api'

function Login() {
  const [credentials, setCredentials] = useState({
    email: {
      value: '',
      error: null
    },
    password: {
      value: '',
      error: null
    },
  });

  const [loading, setLoading] = useState({})

  const handleChange = (key, value) => {
    setCredentials({
      ...credentials,
      [key]: { ...credentials[key], value }
    });
  }

  const login = async () => {
    setLoading({ ...loading, login: true })
    const data = Object.entries(credentials).reduce((data, [key, field]) => ({ ...data, [key]: field.value }), {})
    try {
      await api.post('/user/login', data)
    } catch(e) {
      console.log(e)
    }
    setLoading({ ...loading, login: false })
  }

  return (
    <div className="login">
      <label>Email</label>
      <input onChange={(e) => handleChange('email', e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => handleChange('password', e.target.value)} />
      <button onClick={login}>Log In</button>
    </div>
  )
}

export { Login }
