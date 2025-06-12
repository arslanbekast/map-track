import type { MonitoringResponse } from '@/features/monitoring/api/monitoringApi.types'

export const positionsTransform = (positions: MonitoringResponse[]) => {
  return positions.map(pos => ({
    id: pos.id,
    address: pos.address,
    position: [pos.latitude, pos.longitude],
  }))
}
