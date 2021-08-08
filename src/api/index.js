import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-key': 'f6860d4f83mshf07e9aded67457fp1145b4jsna2eeb3ba123b',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
    try {
        // request
        const { data: { data }} = await axios.get(URL, options);
        
        return data;
    } catch(error){
            console.log(error);
    }
}