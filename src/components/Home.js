import Weather from './Weather'
import News from "./News";
import EmergencyButtons from "./EmergencyButtons";
import { useState, useEffect } from "react";

const Home = () => {

    const [pos, setPos] = useState({})

    useEffect(() => {
        
        if('geolocation' in navigator){ 
            navigator.geolocation.getCurrentPosition(position =>{
                setPos({longitude: position.coords.longitude.toString(), latitude: position.coords.latitude.toString()})
                // setLatitude(position.coords.latitude.toString())
                // setLongitude(position.coords.longitude.toString())
            })
        }   
    }, [])

    let token = sessionStorage.getItem('token')
    let headers = { headers: {
        "Authorization": `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest"
    }}
    // if(!userData){
    //     return <Navigate to="/" />
    // }

    return (
        <div>
            <p>render Home</p>
            <a href="/settings">settings</a>
            <Weather pos={pos}/>
            <EmergencyButtons pos={pos} headers={headers}/>
            <News />
        </div>
    )
}

export default Home
