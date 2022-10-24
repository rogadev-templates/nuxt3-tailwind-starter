type InputValidation = {
  key: string
  isBlank: boolean
  lengthMin12: boolean
  hasError: boolean
  value: string
  emailTaken?: boolean
  usernameTaken?: boolean
  errorMessage?: string
}