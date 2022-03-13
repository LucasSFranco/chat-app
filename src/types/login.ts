import { Loading, TextField } from './common'

export type Credentials = {
  email: TextField
  password: TextField
}

export type LoginContextData = {
  credentials: Credentials
  loading: Loading
  handleChange: (key: string, value: any) => void
  signIn: () => void
}
