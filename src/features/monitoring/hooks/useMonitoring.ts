import { useSelector } from 'react-redux'
import {
  selectMonitoringLoading,
  selectPositions,
} from '@/features/monitoring/model/monitoringSlice'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { useEffect } from 'react'
import {
  fetchPosition,
  startMonitoringPolling,
  stopMonitoringPolling,
} from '@/features/monitoring/model/monitoringSaga'

export const useMonitoring = () => {
  const positions = useSelector(selectPositions)
  const loading = useSelector(selectMonitoringLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosition())
    dispatch(startMonitoringPolling())
    return () => {
      dispatch(stopMonitoringPolling()) // Остановка цикла
    }
    // dispatch(fetchPositionRequest())
    // dispatch(fetchPosition())
    // const interval = setInterval(() => {
    //   dispatch(fetchPosition())
    // }, 30000)
    //
    // return () => clearInterval(interval)
  }, [dispatch])

  return { positions, loading }
}
