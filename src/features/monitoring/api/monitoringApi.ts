import { api } from '@/common/api/commonApi'
import type { MonitoringResponse } from '@/features/monitoring/api/monitoringApi.types'

export const monitoringApi = {
  getPositions() {
    return api.get<MonitoringResponse[]>('/api/positions')
  },
}
