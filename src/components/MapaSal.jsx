import './MapaSal.css'

const locations = [
  {
    name: 'Shopping Cidade Jardim',
    address: 'Av. Magalhães de Castro, 12.000 - Morumbi, São Paulo - SP',
    phone: '(11) 3198-9505',
    hours: 'Seg - Dom: 12h às 23h',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Shopping+Cidade+Jardim+São+Paulo',
  },
  {
    name: 'Bela Cintra - Jardins',
    address: 'R. Bela Cintra, 1958 - Jardins, São Paulo - SP',
    phone: '(11) 3554-4460',
    hours: 'Seg - Dom: 12h às 23h',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Rua+Bela+Cintra+1958+São+Paulo',
  },
]

export default function MapaSal() {
  return (
    <div className="mapa-sal">
      <div className="mapa-sal-box">
        <img src="/assets/img-maps-sal-gastronomia-2024fev1.webp" alt="Sal Gastronomia - Mapa das unidades" />
      </div>
      <div className="mapa-sal-locations">
        {locations.map((loc, i) => (
          <a key={i} href={loc.mapsLink} target="_blank" rel="noopener noreferrer" className="mapa-location-card">
            <h3>{loc.name}</h3>
            <p>{loc.address}</p>
            <p className="mapa-location-phone">{loc.phone}</p>
            <p className="mapa-location-hours">{loc.hours}</p>
            <span className="mapa-location-link">Abrir no Google Maps</span>
          </a>
        ))}
      </div>
    </div>
  )
}