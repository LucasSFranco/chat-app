export type Loading = { [key: string]: boolean }

export type ValidationError = { field: string, code: string }

export type TextField = {
  value: string,
  error?: ValidationError | null
}
