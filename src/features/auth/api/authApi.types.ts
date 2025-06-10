export interface AuthResponse {
  token: Token
  user: User
}

export interface Token {
  token: string
  refreshToken: string
  exp: string
}

export interface User {
  id: number
  name: string
  email: string
  readOnly: boolean
  role: string
  latitude: number
  longitude: number
  zoom: number
  twelvehourformat: boolean
  attributes: Attributes
  coordinateformat: null
  disabled: boolean
  expirationtime: null
  devicelimit: number
  devicereadonly: boolean
  phone: null
  limitcommands: boolean
  disablereports: boolean
  fixedemail: boolean
  totpkey: null
  temporary: boolean
  timezone: string
  access: string[]
  editgroup: null
  language: string
}

export interface Attributes {
  navbarPosition: string
}
