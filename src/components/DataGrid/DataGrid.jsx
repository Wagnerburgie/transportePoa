import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataGridDemo({ rows, columns, onCellClick }) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid rows={rows} columns={columns} onCellClick={onCellClick} />
    </div>
  );
}