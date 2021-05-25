import React, { useState, useEffect } from "react";
import { Component } from "react";
import DataGrid from "../DataGrid/DataGrid"

const columns = [
    { field: 'codigo', headerName: 'Código', width: 125 },
    { field: 'nome', headerName: 'Nome', width: 350 },
];
class FiltroClass extends Component {
    constructor() {
        super();
        this.state = { linhas: [] };
        this._novasLinhas = this._novasLinhas.bind(this);
        //this._getMarkers = this._getMarkers.bind(this);
    }
    _novasLinhas(linhas) {
        this.setState({ ...this.state, linhas })
    }

    componentDidMount() {
        this.props.linhas.inscrever(this._novasLinhas);
    }
    // _getMarkers() {
    //     this.props.markers.getMarkers(55);
    // }
    _novasLinhas(linhas) {
        this.setState({ ...this.state, linhas });
    }
    render() {
        return (
            <DataGrid pagination rows={this.state.linhas} columns={columns} onCellClick={(event) => {this.props.selecionarLinha(event.id);}} />);
    }
}
//this.props.selecionarLinha(event.target)
export default FiltroClass;