import Weather from './Weather'
import News from "./News";
import EmergencyButtons from "./EmergencyButtons";
import { useState, useEffect } from "react";
import AppName from './AppName'
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

const Home = () => {

    const navigate = useNavigate()
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

    let userData  = sessionStorage.getItem('userData')
    let token = sessionStorage.getItem('token')
    let headers = { headers: {
        "Authorization": `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest"
    }}
    if(!userData){
        navigate('/')
    }

    return (
        <div className="flex flex-col bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen text-white">
                <div className="container px-4">
                    <Navbar/>
                    <AppName/>
                    <div>
                        <Weather pos={pos}/>
                    </div>
                    <EmergencyButtons pos={pos} headers={headers}/>
                    <News />
            </div>
        </div>
    )
}

export default Home
