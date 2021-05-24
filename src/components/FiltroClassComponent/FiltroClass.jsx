import React, { useState, useEffect } from "react";
import { Component } from "react";
import DataGrid from "../DataGrid/DataGrid"
class FiltroClass extends Component {
    constructor() {
        super();
        this.state = { linhas: [] };
        this._novasLinhas = this._novasLinhas.bind(this);
    }
    _novasLinhas(linhas) {
        this.setState({ ...this.state, linhas })
    }

    componentDidMount() {
        this.props.linhas.inscrever(this._novasLinhas);
        //this.props.linhas.notificar();
    }
    _novasLinhas(linhas) {
        this.setState({ ...this.state, linhas })
    }
    render() {
        return (<div><DataGrid data={this.state.linhas} /></div>);
    }
}
export default FiltroClass;