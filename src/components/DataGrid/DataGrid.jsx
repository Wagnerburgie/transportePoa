import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function DataGridDemo({ rows, columns, onCellClick }) {
  return (
      <DataGrid rows={rows} columns={columns} onCellClick={onCellClick} hideFooterSelectedRowCount />
  );
}