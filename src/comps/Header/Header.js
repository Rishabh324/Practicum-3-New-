import axios from 'axios';
import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, Box, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = ({ setHotelData, onLoad, setIsLoading }) => {
  const classes = useStyles();
  console.log(onLoad);
  const [city, setCity] = React.useState('');

  const getCoords = () => {
    axios.get(`http://localhost:4040/getLatLng?cityName=${city}}`)
      .then((response) => {
        console.log(response.data);
        setHotelData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'orange' }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Bon_Voyage
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <TextField
            id="standard-basic"
            // label="Search"
            style={{ margin: '0 20px', backgroundColor: 'orange' }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setIsLoading(true);
                getCoords();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" onClick>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
