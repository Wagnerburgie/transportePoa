import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, Polyline } from '@react-google-maps/api';

const containerStyle = {
  width: '75vw',
  height: '100vh'
};

const libraries = ["places"];

function MyComponent({ markers, center }) {
  const [marker, setMarkers] = useState([]);
  //useObservable(markers, setMarkers);

  //Monta o script para o GoogleMaps
  const { isLoaded, loadError } = useLoadScript({
    libraries,
    //Api Key salva no env.local
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  useEffect(() => {
    console.log('o que é isso...',markers);
  });

  if (!isLoaded) return "Carregando Mapa";

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onClick={(event) => {
        console.log(event.latLng.lng());
      }}
    >
      {/* {markers.markers.map((marker, index) => (
        <Marker key={index} position={{lat:Number(marker.lat), lng:Number(marker.lng)}}/>
        )
    )} */}
      <Polyline key={0} path={markers.markers.map((marker) => ({ lat: Number(marker.lat), lng: Number(marker.lng) }))} />
    </GoogleMap>
  )
}

export default MyComponent;