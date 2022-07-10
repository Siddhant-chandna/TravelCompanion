import axios from 'axios';


export const getPlacesData= async(type,sw,ne) => {
    try{
        const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '5cb243f269msh0fb0889a348fb74p160298jsn40522d3d0987'
          }
        });

        return data;
    }catch(error){
console.log(error)
    }
}




