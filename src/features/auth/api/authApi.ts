import { api } from '@/common/api/commonApi'
import type { AuthResponse } from '@/features/auth/api/authApi.types'

export const authApi = {
  login(data: object) {
    return api.post<AuthResponse>('/session/demo', data)
  },
}
