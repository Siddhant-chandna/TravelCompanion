import axios from 'axios';

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData= async(sw,ne) => {
    try{
        const {data:{data}}=await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '5cb243f269msh0fb0889a348fb74p160298jsn40522d3d0987'
          }
        });

        return data;
    }catch(error){
console.log(error)
    }
}





/* 
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import MapStyle from './style';

const Map = (setCoordinates ,setBounds,coordinates) =>{
    const classes=MapStyle();
    const isMobile=useMediaQuery('(min-width:600px)');

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
            onChange={(e)=>{
                console.log(e);
                setCoordinates({lat: e.center.lat,lng: e.center.lng})
            }}
            onChildClick={''}
            >
            </GoogleMapReact>
         </div>
    );
}

export default Map;
*/