import React from "react";
import { Component } from "react";
import DataGrid from "../DataGrid/DataGrid"
import { Select, InputLabel, TextField, FormControl } from '@material-ui/core';

const columns = [
    { field: 'codigo', headerName: 'Código', width: 125 },
    { field: 'nome', headerName: 'Nome', width: 330 },
];

class FiltroClass extends Component {
    constructor() {
        super();
        this.state = { linhas: [], nomeLinha: "", linhasFiltro: [] };
        this._novasLinhas = this._novasLinhas.bind(this);
        this._alteraTipoBus = this._alteraTipoBus.bind(this);
        this.filtrarLinhas = this.filtrarLinhas.bind(this);
    }

    _novasLinhas(linhas) {
        this.setState({ ...this.state, linhas, linhasFiltro: linhas }, () => {
            this.filtrarLinhas();
        })
    }

    _alteraTipoBus(tipoBus) {
        this.props.linhas.alteraTipoBus(tipoBus);
    }

    componentDidMount() {
        this.props.linhas.inscrever(this._novasLinhas);
    }

    filtrarLinhas() {
        let linhasFiltradas = this.state.linhas.filter((linha) => {
            return linha.nome.toLocaleUpperCase().includes(this.state.nomeLinha.toLocaleUpperCase());
        });
        this.setState({ linhasFiltro: linhasFiltradas })
    }

    render() {
        return (
            <div style={{ height: '94%', width: '100%' }}>
                <FormControl className="formControl" style={{ flexDirection: "row", width: "100%" }}>
                    <InputLabel htmlFor="outlined-age-native-simple" style={{ paddingLeft: "10px" }}>Tipo Onibus</InputLabel>
                    <Select
                        native
                        style={{ width: '150px', paddingLeft: '10px' }}
                        label="Tipo Onibus"
                        onChange={(event) => { this._alteraTipoBus(event.target.value); this.filtrarLinhas(); }}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option value='o'>Ônibus</option>
                        <option value='l'>Lotação</option>
                    </Select>
                    <TextField id="standard-basic"
                        label="Nome"
                        style={{marginLeft:"23px", width:"100%"}}
                        value={this.state.nomeLinha}
                        onChange={(event) => { this.setState({ nomeLinha: event.target.value }) }}
                        onKeyUp={() => { this.filtrarLinhas() }}
                    />
                </FormControl>
                <DataGrid pagination rows={this.state.linhasFiltro} columns={columns} onCellClick={(event) => { this.props.selecionarLinha(event.id); }} />
            </div>);
    }
}

export default FiltroClass;