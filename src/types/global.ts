export type AccessToken = string

export type GlobalContextData = {
  auth: string | null
  loading: boolean
  authenticate: (accessToken: string) => void
}
