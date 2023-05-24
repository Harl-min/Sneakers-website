import React from 'react'
import Modal from './Modal';
import Box from '@mui/material/Box';
import '../css/Profile.css';
import Avatar from '../images/ninja.png'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Profile = () => {

  const currencies = [
    {
      value: 'USD',
      label: 'Lagos',
    },
    {
      value: 'EUR',
      label: 'Abuja',
    },
    {
      value: 'BTC',
      label: 'Oyo',
    },
    {
      value: 'JPY',
      label: 'Osun',
    },
  ];
  

  return (
    <>
    <div className="profile-container">
    <div>
      <h2 className='header'>Account </h2>
    </div>
    <div className="profile-box">
     <Box className='box'  sx={{
        width: 400,
        height: 250,
        marginTop: 5,
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: 2,   
        borderRadius: 4,
        backgroundColor: '#ffffff',
        // '&:hover': {
        //   backgroundColor: '#FFFFFF',
        //   opacity: [0.9, 0.8, 0.7],
          
        // },
      }}>
      <div className="profile">
        <img src={Avatar} alt="profile-pic" />
        <h2>Harl</h2>
        <h4>Cincinnati USA</h4>
        <h6>Postal Code: 100203</h6>
      </div>
      </Box>
      <Box className='box'  sx={{
          width: '100%',
          height: 500,
          marginLeft: 5,
          marginTop: 5,
          boxShadow: 3,   
          borderRadius: 4,
          backgroundColor: '#ffffff',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          opacity: [0.9, 0.8, 0.7],
          
        },
      }}>
      <div className="profile">
        <h2>Profile</h2>
        <h5>This information can be edited</h5>
        <div className="input">
        <TextField id="outlined-basic" label="First Name*" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name*" variant="outlined" />
        </div>
        <div className="input">
        <TextField id="outlined-basic" label="Email Address*" variant="outlined" />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </div>
        <div className="input">
        <TextField id="outlined-basic" label="Country*" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select State*"
          defaultValue="EUR"
          helperText="Please select state of residence"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>        
        </div>
       
      </div>
      </Box>
      </div>
      </div>
      </>
  );
}

export default Profile