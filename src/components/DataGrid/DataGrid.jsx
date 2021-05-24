import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataGridDemo({ data, columns }) {
  let rows = data;
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}