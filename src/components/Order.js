import React from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "../css/Order.css"

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'orderName',
    headerName: 'Orders',
    width: 150,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Qty',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    // type: 'number',
    width: 150,
    editable: true,
  },

];

const rows = [
  { id: 1, quantity:'1', orderName: 'Snow', date: '3/4/2015' },
  { id: 2, quantity:'3', orderName: 'Lannister',  date: '3/4/2025' },
  { id: 3, quantity:'1', orderName: 'Lannister',  date: '3/4/2023' },
  { id: 4, quantity:'4', orderName: 'Stark',  date: '3/4/2022' },
  { id: 5, quantity:'1', orderName: 'Targaryen', date: '3/4/2021' },
  { id: 6, quantity:'6', orderName: 'Melisandre', date: '3/4/2022' },
  { id: 7, quantity:'7', orderName: 'Clifford', date: '3/4/2021' },
  { id: 8, quantity:'7', orderName: 'Frances', date: '3/4/2023' },
  { id: 9, quantity:'3', orderName: 'Roxie',  date: '3/4/2023' },
];
const Order = () => {
  return (
    <Box className='box' sx={{ height: '100%', width: '100%', display: 'block', float: 'right', backgroundColor: '#ffffff', padding: 5}}>
      <DataGrid
      sx={{
        boxShadow: 2,
        border: 8,
        borderColor: '#ffffff',
        '& .MuiDataGrid-cell:hover': {
          color: '#0536BB',
        },
        borderRadius: 4
      }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default Order