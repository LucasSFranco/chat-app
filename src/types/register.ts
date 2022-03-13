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
  handleChange: (key: string, value: any) => void
  signUp: () => void
}
