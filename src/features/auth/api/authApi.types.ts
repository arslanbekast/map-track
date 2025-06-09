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
  coordinateformat: any
  disabled: boolean
  expirationtime: any
  devicelimit: number
  devicereadonly: boolean
  phone: any
  limitcommands: boolean
  disablereports: boolean
  fixedemail: boolean
  totpkey: any
  temporary: boolean
  timezone: string
  access: string[]
  editgroup: any
  language: string
}

export interface Attributes {
  navbarPosition: string
}
