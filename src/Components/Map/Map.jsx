import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import PropTypes from 'prop-types'
import MapStyle from './style.js';

const Map = ({setCoordinates ,setBounds,coordinates}) =>{
    const classes=MapStyle();
    const isMobile=useMediaQuery('(min-width:600px)');

    return(
        <div className={classes.mapContainer}>
           <GoogleMapReact
           bootstrapURLKeys={{key: 'AIzaSyBaEcp3QZAAxwqIpe99bfkIcgDv64yVFWs'}}
           defaultCenter={coordinates}
           center={coordinates}
           defaultZoom={14}
           margin={[50,50,50,50]}
           options={''}
           onChange={(e) => {
               setCoordinates({lat: e.center.lat, lng: e.center.lng});
               setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
           }}
           onChildClick={''}
           >

           </GoogleMapReact>
         </div>
    );
};

export default Map;

// AIzaSyBaEcp3QZAAxwqIpe99bfkIcgDv64yVFWs
// AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo