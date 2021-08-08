import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';


export const getPlacesData = async (sw, ne ) => {
    try {
        // request
        const { data: { data }} = await axios.get(URL, options);
        const options = {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': 'f6860d4f83mshf07e9aded67457fp1145b4jsna2eeb3ba123b',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          };
        return data;
    } catch(error){
            console.log(error);
    }
}