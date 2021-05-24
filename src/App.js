import React, { Component, Fragment } from "react";
import "./App.css";
//import Filtro from "./components/Filtro/Filtro";
import GoogleMap from "./components/GoogleMap/GoogleMap"
import 'fontsource-roboto';
import Linhas from './dados/linhas'
import FiltroClassComponent from "./components/FiltroClassComponent/index"
import { Container, Typography, Grid } from "@material-ui/core"


class App extends Component {
  constructor() {
    super();
    this.linhas = new Linhas();
  }
  render() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h3" component="h1" align="left" >Filtro</Typography>
            <FiltroClassComponent adicionarLinha={this.linhas.adicionarLinha.bind(this.linha)} linhas={this.linhas} />
          </Grid>
          <Grid item xs={9}>
            <GoogleMap />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}


function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
