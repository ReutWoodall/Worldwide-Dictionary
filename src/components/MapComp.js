import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup }  from 'react-leaflet';

const zoom = 13;

function MapComp({ latlng = [0, 0] }) {
  const [map, setMap] = useState();

  useEffect(() => {
    if (map) {
      map.setView(latlng, zoom);
    }

  }, [map, latlng]);

  return(
    <MapContainer className="leafletsize" whenCreated={(initialMap) => setMap(initialMap)} center={latlng} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={latlng}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )

}
  
export default MapComp;