export type Loading = { [key: string]: boolean }

export type ValidationError = { path: string[], type: string, message: string }

export type TextField = {
  value: string
  error?: ValidationError | null
}
