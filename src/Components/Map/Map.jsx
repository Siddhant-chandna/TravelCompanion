import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types'
import MapStyle from './style.js';

const Map = ({setCoordinates ,setBounds,coordinates,places,setChildClicked}) =>{
    const classes=MapStyle();
    const isDesktop=useMediaQuery('(min-width:600px)');
    

    return(
        <div className={classes.mapContainer}>
           <GoogleMapReact
           bootstrapURLKeys={{key: 'AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo'}}
           defaultCenter={coordinates}
           center={coordinates}
           defaultZoom={16}
           margin={[50,50,50,50]}
           options={''}
           onChange={(e) => {
               setCoordinates({lat: e.center.lat, lng: e.center.lng});
               setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
           }}
           onChildClick={(child) => setChildClicked(child)}
           >
               {places?.map((place,i)=>(
                   <div className={classes.markerContainer}
                   lat={Number(place.lattitude)}
                   lng={Number(place.longitude)}
                   key={i}
                   >
                      {!isDesktop
                            ? ( <LocationOnOutlinedIcon color="primary" fontSize="large" />
                           ) : (
                                <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                <img
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                    alt={place.name} 
                                />
                                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )}
                   </div>
               ))}
           </GoogleMapReact>
         </div>
    );
};

export default Map;

// AIzaSyBaEcp3QZAAxwqIpe99bfkIcgDv64yVFWs
// AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo
// AIzaSyCjx0VcQOSzfyAtO--jUTcRIHtwnjT766fQ
// AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs