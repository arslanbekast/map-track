import { type LatLngTuple } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { CircularProgress } from '@mui/material'
import { createRandomColorIcon } from '@/common/utils/createRandomColorIcon'
import { useMonitoring } from '@/features/monitoring/hooks/useMonitoring'
import s from './Monitoring.module.scss'

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
      <ChangeView center={positions[0].position} />
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

const ChangeView = ({ center }: { center: LatLngTuple }) => {
  const map = useMap()
  map.setView(center)
  return null
}
