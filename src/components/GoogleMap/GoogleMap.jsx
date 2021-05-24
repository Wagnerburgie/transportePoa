import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '75vw',
  height: '100vh'
};

const center = {
  lat: -30.0277, lng: -51.2287
};

const libraries = ["places"];
function MyComponent() {
  const { isLoaded, loadError } = useLoadScript({
    libraries,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })
  if(!isLoaded) return "Carregando Mapa";
  
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    />

  )
}

export default MyComponent;