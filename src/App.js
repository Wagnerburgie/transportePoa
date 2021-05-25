import React, { Component, Fragment } from "react";
import "./App.css";
//import Filtro from "./components/Filtro/Filtro";
import GoogleMap from "./components/GoogleMap/GoogleMap"
import 'fontsource-roboto';
import Linhas from './dados/linhas'
import Markers from './dados/markers'
import FiltroClassComponent from "./components/FiltroClassComponent/index"
import { Container, Typography, Grid } from "@material-ui/core"

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
    this.getMarkers = this.getMarkers.bind(this)
  }

  getMarkers(id) {
    this.markers.getMarkers(id);
  }

  render() {
    return (
      <Grid container style={gridStyle}>
        <Grid item xs={3}>
          <FiltroClassComponent
            adicionarLinha={this.linhas.adicionarLinha.bind(this.linha)}
            linhas={this.linhas}
            markers={this.markers}
            selecionarLinha={(id) => { this.getMarkers(id) }}
          />
        </Grid>
        <Grid item xs={9}>
          <GoogleMap markers={this.markers} center={center} />
        </Grid>
      </Grid>
    );
  }
}


export default App;
