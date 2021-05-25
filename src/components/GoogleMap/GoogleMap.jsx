import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript , Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '75vw',
  height: '100vh'
};

const libraries = ["places"];

function MyComponent({ markers, center }) {
  const [marker, setMarkers] = useState([]);

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
      <Polyline key="polyline" path={markers.markers.map((marker) => ({ lat: Number(marker.lat), lng: Number(marker.lng) }))} options={options} />
    </GoogleMap>
  )
  function _novasMarkers(markers) {
    setMarkers({ ...marker, markers });
  }
}

export default MyComponent;