import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'


import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coords, places, setChildClicked }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px');
    

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys= {{key: 'AIzaSyA8sQxPLNXSFWhATbDNvPeFjxIuiOTj8TU'}}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                // google maps helps change coordinates dynamically
                onChange={(e) => { 
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
 
                onChildClick={(child) => setChildClicked(child)}
            >
                {places.length && places.map((place, i) => (
                    <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                    >

                        {
                            isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />

                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.typography} variant="subtitle2" gutterBottom >
                                            {place.name}
                                        </Typography>
                                        <img 
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://media.npr.org/assets/img/2015/04/29/diner_slide-996a043a81530235f8996b424a5cb39f2a99bbd0.jpg'}
                                        alt={place.name}
                                />
                                <Rating size="small" value={Number(place.rating)} readOnly />                                    
                                </Paper>
                                
                            )
                        }
                    </div>
                ))}
            
            </GoogleMapReact>
        </div>
    )
}

export default Map
