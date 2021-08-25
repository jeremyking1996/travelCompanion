import axios from 'axios';





export const getPlacesData = async (type, sw, ne) => {
  try {
    const {data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
    , {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'f6860d4f83mshf07e9aded67457fp1145b4jsna2eeb3ba123b'
      }
    });

    return data;
  } catch (error){
    console.log(error)
  }
}
