import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = () => {

    // const [latitude, setLatitude] = useState()
    // const [longitude, setLongitude] = useState()
    const [pos, setPos] = useState({longitude:'',latitude:''})
    const [loc, setLoc] = useState()

    useEffect(() => {
        
        if('geolocation' in navigator){ 
            navigator.geolocation.getCurrentPosition(position =>{
                setPos({longitude: position.coords.longitude.toString(), latitude: position.coords.latitude.toString()})
                // setLatitude(position.coords.latitude.toString())
                // setLongitude(position.coords.longitude.toString())
            })
        }   
    }, [])


    const { data, isLoading, errorMessage } = useOpenWeather({

    key: '415fc659f9cd6c12704501275ae5d916',
    lat: pos.latitude,
    lon: pos.longitude,
    // lat: '14.1708371',
    // lon: '121.576124',
    lang: 'en',
    unit: 'metric', 
    });


    useEffect(() => {
        axios({
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=415fc659f9cd6c12704501275ae5d916`
        })
        .then((response)=> { 
            setLoc(response.data.name)
        })
        .catch((error) => console.log(error))
    }, [pos])
  
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={loc}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
}   
export default Weather