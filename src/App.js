import React,{useState,useEffect} from 'react';
import { CssBaseline,Grid } from '@material-ui/core';
import { getPlacesData } from './api/travelapi';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
 
const App = ()=> {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces,setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('0');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude ,lng: longitude});
    })
  },[]);

  useEffect(()=>{
       const filteredPlaces = places.filter((place)=> place.rating = rating);
       setFilteredPlaces(filteredPlaces);
  },[rating]);

  useEffect(() => {
    if(bounds){
      setIsLoading(true);
    setIsLoading(true);
     getPlacesData(type,bounds.sw ,bounds.ne)
     .then((data)=>{
          setPlaces(data?.filter((place)=> place.name && place.num_reviews >0));
          setFilteredPlaces([]);
          setIsLoading(false);
     })
    }
  },[type,coordinates,bounds]);
  
  return (
    <>
    <CssBaseline/>
    <Header setCoordinates={setCoordinates}/>
    <Grid container spacing={0} style={{ width:'100%'}}>
       <Grid items xs={12} md={4}>
            <List 
             places={filteredPlaces.length ? filteredPlaces:places} 
             childClicked={childClicked}
             isLoading={isLoading}
             type={type}
             setType={setType}
             rating={rating}
             setRating={setRating}
             />
       </Grid>
       <Grid items xs={12} md={8}>
            <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces:places} 
            setChildClicked={setChildClicked}
            />
       </Grid>
    </Grid>
    </>
  );
}

export default App;
