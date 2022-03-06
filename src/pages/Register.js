import { useState } from 'react'
import { api } from '../services/api'

function Register() {
  const [credentials, setCredentials] = useState({
    name: {
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
    },
  });

  const [loading, setLoading] = useState({})

  const handleChange = (key, value) => {
    setCredentials({
      ...credentials,
      [key]: { ...credentials[key], value }
    });
  }

  const register = async () => {
    setLoading({ ...loading, register: true })
    const data = Object.entries(credentials).reduce((data, [key, field]) => ({ ...data, [key]: field.value }), {})
    try {
      await api.post('/user/register', data)
    } catch(e) {
      console.log(e)
    }
    setLoading({ ...loading, register: false })
  }

  return (
    <div className="register">
      <label>Name</label>
      <input onChange={(e) => handleChange('name', e.target.value)} />
      <label>Email</label>
      <input onChange={(e) => handleChange('email', e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => handleChange('password', e.target.value)} />
      <label>Confirm Password</label>
      <input type="password" onChange={(e) => handleChange('confirmPassword', e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  )
}

export { Register }
