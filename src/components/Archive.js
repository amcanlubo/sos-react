import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toggle } from '../utils/toggle';
import { getTime, getDate } from '../utils/date';
import EmergencyShow from './EmergencyShow';

const Archive = () => {

    const [emergencies,setEmergencies] = useState([])
    const [showToggle,setShowToggle] = useState(false)
    const [toggleEmergency, setToggleEmergency] = useState()
    const [cable,setCable] = useState()
    
    
    if (JSON.parse(sessionStorage.getItem('userData'))){
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        var token = JSON.parse(sessionStorage.getItem('token'))
    }

    let headers = { headers: {
        "Authorization":   `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest",
    }}
   
    const emergencyToggle = (state,setState, data) => {
        toggle(state,setState)
        setToggleEmergency(data)

    }

    if (JSON.parse(sessionStorage.getItem('userData'))){
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        var token = JSON.parse(sessionStorage.getItem('token'))
    }
    

    useEffect(() => {
        axios.get(`${axios.defaults.baseURL}/all_emergencies`, headers)
        .then((response)=>{
            setEmergencies(response.data)
        });
    }, []);

    return (
        <div className="flex flex-col ">
            <h1 className="text-white text-center py-2 tracking-wider font-extrabold text-xl">EMERGENCY ARCHIVE</h1>
            <div className="mb-4 sticky top-0 grid grid-cols-3 text-center p-2 bg-gradient-to-r from-gray-800/90 to-blue-900/90 font-medium text-lg text-white">
                <span>Name</span>
                <div>Emergency Type</div>
                <div>Date & Time</div>
            </div>
            {emergencies.map((emergency)=>{
                return(
                    <div className="card2" onClick={()=>{emergencyToggle(showToggle,setShowToggle, emergency)}}>
                        <span>
                            {emergency.first_name} {emergency.last_name}
                        </span>
                        <div className="grow-0">{emergency.emergency_type}</div>
                        <div className="flex flex-col items-center text-sm">
                            <p>{getDate(emergency.created_at)}</p>
                            <p>{getTime(emergency.created_at)}</p>
                        </div>
                    </div>
                )
            })}
            
            <EmergencyShow showToggle={showToggle} setShowToggle={setShowToggle} emergencyData={toggleEmergency}/>
        
      </div>
    );
};

export default Archive;
