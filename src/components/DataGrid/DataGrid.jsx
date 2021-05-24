import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
//{id: "5791", codigo: "A971-1", nome: "ALIMENTADORA J. P. ALVES/ESCOLAR/IDA"}
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'codigo', headerName: 'Codigo', width: 150 },
  { field: 'nome', headerName: 'Nome', width: 150 },
];

export default function DataGridDemo({ data }) {
  let rows = data;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}