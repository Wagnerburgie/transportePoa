import React, { useState, useEffect } from "react";
import { TextField, Button, Switch, FormControlLabel, Select, InputLabel, MenuItem } from "@material-ui/core";
import DataGrid from "../DataGrid/DataGrid"
//import Select from '@material-ui/core/Select';

function FormularioCadastro({ linhas, aoEnviar }) {
    const [nome, setNome] = useState("");
    const [linha, setLinhas] = useState(linhas.linhas);
    const [count, setCount] = useState(0);
    console.log(linhas);
    useEffect(() => {
        setLinhas(linhas)
    });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <DataGrid data={linhas.linhas} />
            <Button onClick={() => setCount(count + 1)} variant="contained" color="primary">
                Pesquisar
      </Button>
        </form >
    );
}

export default FormularioCadastro;
