import { createRandomColorIcon } from '@/common/utils/createRandomColorIcon'
import { Marker, Popup } from 'react-leaflet'
import type { LatLngTuple } from 'leaflet'

type Props = {
  address: string
  position: LatLngTuple
}

export const CustomMarker = ({ address, position }: Props) => {
  return (
    <Marker position={position} icon={createRandomColorIcon()}>
      <Popup>{address}</Popup>
    </Marker>
  )
}
