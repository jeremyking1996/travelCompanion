import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px');
    

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstralURLKeys= {{key: 'AIzaSyAH4Le89aSKBp63RuMlRfCgkxlUGceO_OA'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                // google maps helps change coordinates dynamically
                onChange={(e) => { 
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                }}
 
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
