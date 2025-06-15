import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { CircularProgress } from '@mui/material'
import { createRandomColorIcon } from '@/common/utils/createRandomColorIcon'
import { useMonitoring } from '@/features/monitoring/hooks/useMonitoring'
import s from './Monitoring.module.scss'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectPositions } from '@/features/monitoring/model/monitoringSlice'

export const Monitoring = () => {
  const { positions, loading } = useMonitoring()

  if (loading) return <CircularProgress />

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
        <Marker key={pos.id} position={pos.position} icon={createRandomColorIcon()}>
          <Popup>{pos.address}</Popup>
        </Marker>
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
