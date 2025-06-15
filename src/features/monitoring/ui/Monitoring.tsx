import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { CircularProgress } from '@mui/material'
import { useMonitoring } from '@/features/monitoring/hooks/useMonitoring'
import s from './Monitoring.module.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPositions } from '@/features/monitoring/model/monitoringSlice'
import { CustomMarker } from '@/features/monitoring/ui/CustomMarker/CustomMarker'
import { ErrorState } from '@/features/monitoring/ui/ErrorState/ErrorState'

export const Monitoring = () => {
  const { positions, loading } = useMonitoring()

  if (loading) return <CircularProgress />

  if (positions.length === 0) return <ErrorState />

  return (
    <MapContainer
      center={positions[0].position}
      zoom={13}
      scrollWheelZoom={true}
      className={s.mapContainer}
    >
      <ChangeView />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map(pos => (
        <CustomMarker key={pos.id} address={pos.address} position={pos.position} />
      ))}
    </MapContainer>
  )
}

const ChangeView = () => {
  const map = useMap()
  const positions = useSelector(selectPositions)
  useEffect(() => {
    map.setView(positions[0].position)
  }, [map, positions])
  return null
}
