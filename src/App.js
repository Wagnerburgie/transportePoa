import React, { Component } from "react";
import "./App.css";
//import Filtro from "./components/Filtro/Filtro";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import 'fontsource-roboto';
import Linhas from './dados/Linhas';
import Markers from './dados/Markers';
import FiltroClassComponent from "./components/FiltroClassComponent/index";
import { Grid } from "@material-ui/core";

const gridStyle = {
  height: '100%'
};

const center = {
  lat: -30.0277, lng: -51.2287
};


class App extends Component {
  constructor() {
    super();
    this.linhas = new Linhas();
    this.markers = new Markers();
  }

  render() {
    return (
      <Grid container style={gridStyle}>
        <Grid item xs={3}>
          <FiltroClassComponent
            linhas={this.linhas}
            markers={this.markers}
            getMarkers={this.markers.getMarkers.bind(this.markers)}
          />
        </Grid>
        <Grid item xs={9} >
          <GoogleMap markers={this.markers} center={center} />
        </Grid>
      </Grid>
    );
  }
}


export default App;
