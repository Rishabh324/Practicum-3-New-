/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import axios from 'axios';
import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({ places, childClicked, isLoading, lat, lng, hotelData, setHotelData }) => {
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    useEffect(() => {
        axios.get(`http://localhost:4040/sharepost?lat=${lat}&lng=${lng}`)
            .then((response) => {
                setHotelData(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }, []);
    return (
        <div className={classes.container}>
            {/* <Typography variant="h4">Food & Dining around you</Typography> */}
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="4rem" />
                </div>
            ) : (
                <>
                    {/* <FormControl className={classes.formControl}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControl> */}
                    {hotelData?.length === 0 ? (
                        <Typography variant="h3" className={classes.nirasha}>No results Found</Typography>
                        ) : (
                        <Grid container spacing={3} className={classes.list}>
                            {hotelData.map((hotel, i) => (
                                <Grid ref={elRefs[i]} key={i} item xs={12} md={4}>
                                    <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={hotel} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </>
            )}
        </div>
    );
};

export default List;
