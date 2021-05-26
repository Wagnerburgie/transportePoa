import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Polyline, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '75vw',
  height: '100vh'
};

const libraries = ["places"];
//Function Component
function MyComponent({ markers, center }) {
  const [marker, setMarkers] = useState([]);

  function _novasMarkers(markers) {
    //Troca pelas markers novas
    setMarkers([...markers]);
  }

  useEffect(() => {
    markers.inscrever(_novasMarkers);
  })

  const options = {
    strokeColor: '#0000ff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000ff',
    fillOpacity: 0.35,
  }
  //Monta o script para o GoogleMaps
  const { isLoaded } = useLoadScript({
    libraries,
    //Api Key salva no env.local
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) return "Carregando Mapa";

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      {marker.map((x, index) => (
        (index === marker.length - 1 || index === 0 ?
          <Marker key={'marker' + index} position={{ lat: Number(x.lat), lng: Number(x.lng) }} /> :
          []
        )
      ))
      }
      <Polyline key="polyline" path={marker.map((x) => ({ lat: Number(x.lat), lng: Number(x.lng) }))} options={options} />
    </GoogleMap>
  )
}

export default MyComponent;