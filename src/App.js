import React, { Component, Fragment } from "react";
import "./App.css";
//import Filtro from "./components/Filtro/Filtro";
import GoogleMap from "./components/GoogleMap/GoogleMap"
import 'fontsource-roboto';
import Linhas from './dados/linhas'
import FiltroClassComponent from "./components/FiltroClassComponent/index"

import { Container, Typography } from "@material-ui/core"
class App extends Component {
  constructor() {
    super();
    this.linhas = new Linhas();
    //this.linhas.notificar();
  }
  render() {
    return (
      <Fragment>
        <Container component="article" maxWidth="lg">
          <Typography variant="h3" component="h1" align="left" >Filtro</Typography>
          <FiltroClassComponent adicionarLinha={this.linhas.adicionarLinha.bind(this.linha)} linhas={this.linhas} />
        </Container>
        <Container component="map" maxWidth="lg" align="right">
          <GoogleMap />
        </Container>
      </Fragment>
    );
  }
}


function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
