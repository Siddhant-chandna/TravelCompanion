import React from 'react';
import {Box,Typography,Card,Button,cardMedia,CardContent,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOnIcon'
const PlaceDetails = ({place}) =>{
    console.log(place);
    return(
        <h1>{place.name}</h1>
    );
}

export default PlaceDetails;