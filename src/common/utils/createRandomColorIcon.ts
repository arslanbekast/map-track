import { Icon } from 'leaflet'

// Функция генерации иконки с рандомным цветом
export const createRandomColorIcon = () => {
  const hue = Math.floor(Math.random() * 360)
  const color = `hsl(${hue}, 70%, 50%)`
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
      <path fill="${color}" stroke="#000" stroke-width="2" d="M19 0C10.8 0 4 6.8 4 15c0 9.7 13.3 22.6 14.3 23.8.3.4.9.4 1.2 0C20.7 37.6 34 24.7 34 15c0-8.2-6.8-15-15-15z"/>
      <circle cx="19" cy="15" r="6" fill="#fff"/>
    </svg>
  `

  return new Icon({
    iconUrl: `data:image/svg+xml,${encodeURIComponent(svg)}`,
    iconSize: [32, 46], // Размер иконки
    iconAnchor: [19, 42], // Точка привязки (центр низа маркера)
    popupAnchor: [-3, -34], // Точка привязки попапа
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', // Тень маркера
    shadowSize: [41, 41], // Размер тени
    shadowAnchor: [12, 41], // Якорь тени
  })
}
