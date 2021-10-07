import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import MapStyle from './style';

const Map = () =>{
    const classes=MapStyle();
    const isMobile=useMediaQuery('(min-width:600px)');

    const coordinates={lat:0,lng:0};
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyBaEcp3QZAAxwqIpe99bfkIcgDv64yVFWs'}}
            // AIzaSyBaEcp3QZAAxwqIpe99bfkIcgDv64yVFWs
            // AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={8}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
            >
            </GoogleMapReact>
         </div>
    );
}

export default Map;