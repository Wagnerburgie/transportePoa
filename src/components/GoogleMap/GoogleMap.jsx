import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lng: -51.2287,
  lat: -30.0277
};

function Map() {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyCmL-XxDKUrIXw9h5aIh-K6YvfSeurn2qk"
  // })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  // 

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MyGoogleMap() {
  return (
    <div style={{width:'100vw',height:"100vh"}}>
      <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
        loadingElement={<div style={{ height: "100%" }}></div>} 
        containerElement={<div style={{ height: "100%" }}></div>} 
        mapElement={<div style={{ height: "100%" }}></div>} />
    </div>
  )
}

//export default MyComponent;