import React from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "../css/Order.css"
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'orderName',
    headerName: 'Orders',
    width: 300,
  },
  {
    field: 'quantity',
    headerName: 'Qty',
    width: 150,
    // editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    // type: 'number',
    width: 190,
    // editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    // type: 'number',
    width: 150,
    // editable: true,
    renderCell: (params) => (
      <Chip
        label={params.value}
        // variant="outlined"
        color="error"
      />
    ),
  },
  // {
  //   field: 'delete',
  //   headerName: '',
  //   // type: 'number',
  //   width: 150,
  //   renderCell: () => (
  //     <Chip
  //     label="Delete"
  //     variant='outlined'
  //     onClick={handleClick}
  //       onDelete={handleDelete}
  //       deleteIcon={<DeleteIcon />}
  //     />
  //   ),
  // }

];

const rows = [
  { id: 1, quantity:'1', orderName: 'Nike SB Low Dunk', date: '3/4/2015', status: 'Pending'},
  { id: 2, quantity:'3', orderName: 'Nike AirForce 1',  date: '3/4/2025', status: 'Pending' },
  { id: 3, quantity:'1', orderName: 'Nike Air Jordan',  date: '3/4/2023', status: 'Pending' },
  { id: 4, quantity:'4', orderName: 'Nike AirForce 1',  date: '3/4/2022', status: 'Pending' },
  { id: 5, quantity:'1', orderName: 'Nike AirForce 1', date: '3/4/2021', status: 'Pending' },
  { id: 6, quantity:'6', orderName: 'Nike AirForce 1', date: '3/4/2022', status: 'Pending' },
  { id: 7, quantity:'7', orderName: 'Nike AirForce 1', date: '3/4/2021', status: 'Pending' },
  { id: 8, quantity:'7', orderName: 'Nike AirForce 1', date: '3/4/2023', status: 'Pending' },
  { id: 9, quantity:'3', orderName: 'Nike AirForce 1',  date: '3/4/2023', status: 'Pending' },
  { id: 10, quantity:'3', orderName: 'Nike AirForce 1',  date: '3/4/2025', status: 'Pending' },
  { id: 11, quantity:'1', orderName: 'Nike Air Jordan',  date: '3/4/2023', status: 'Pending' },
  { id: 12, quantity:'4', orderName: 'Nike AirForce 1',  date: '3/4/2022', status: 'Pending' },
  { id: 13, quantity:'1', orderName: 'Nike AirForce 1', date: '3/4/2021', status: 'Pending' },
  { id: 14, quantity:'6', orderName: 'Nike AirForce 1', date: '3/4/2022', status: 'Pending' },
  { id: 15, quantity:'7', orderName: 'Nike AirForce 1', date: '3/4/2021', status: 'Pending' },
  { id: 16, quantity:'7', orderName: 'Nike AirForce 1', date: '3/4/2023', status: 'Pending' },
  { id: 17, quantity:'3', orderName: 'Nike AirForce 1',  date: '3/4/2023', status: 'Pending' },
];

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};


const Order = () => {
  return (
    <div className="profile-container">
    <div>
      <h2 className='header'>Orders </h2>
    </div>
    <Box  sx={{ 
      height: '100%', 
      width: '100%', 
      justifyContent: 'center',
      marginTop: 5}}>
      <DataGrid
      sx={{
        boxShadow: 2,
        border: 8,
        borderColor: '#ffffff',
        '& .MuiDataGrid-cell:hover': {
          color: '#0536BB',
        },
        borderRadius: 4,
        backgroundColor: '#ffffff'
      }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      {/* <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      /> */}
    </Box>
    </div>
  )
}

export default Order