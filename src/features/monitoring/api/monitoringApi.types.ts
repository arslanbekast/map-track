export interface MonitoringResponse {
  id: number
  attributes: Attributes
  deviceId: number
  sensorsAttributes: object
  protocol: null
  serverTime: string
  deviceTime: string
  valid: boolean
  latitude: number
  longitude: number
  altitude: number
  speed: number
  course: number
  address: string
  network: null
  geofenceIds: null
  fuelLevel: number
}

export interface Attributes {
  motion: boolean
  sat: number
  power: number
  ignition: boolean
  battery: number
  fuel2: number
  fuel3: number
  fuel4: number
  fuel5: number
  fuelTemp2: number
  fuelTemp3: number
  fuelTemp4: number
  fuelTemp5: number
  numSensorCanal0: number
  numSensorCanal1: number
  numSensorCanal2: number
  numSensorCanal5: number
  numSensorCanal6: number
  temp1: number
  temp2: number
  acp1: number
  acp2: number
  engineSeconds: number
  totalDistance: number
  distance: number
}
