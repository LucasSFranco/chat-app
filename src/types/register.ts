import { Loading, TextField } from './common'

export type Credentials = {
  username: TextField
  email: TextField
  password: TextField
  confirmPassword: TextField
}

export type RegisterContextData = {
  credentials: Credentials
  loading: Loading
  handleChange: (name: string, value: any) => void
  signUp: () => void
}
