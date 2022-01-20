import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { toggle } from '../utils/toggle';
import EmergencyShow from './EmergencyShow';

const Admin = () => {

    const [emergencies,setEmergencies] = useState([])
    const [showToggle,setShowToggle] = useState(false)
    const [toggleEmergency, setToggleEmergency] = useState()


    if (JSON.parse(sessionStorage.getItem('userData'))){
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        var token = JSON.parse(sessionStorage.getItem('token'))
    }
    

    let headers = { headers: {
        "Authorization": `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest",
    }}

    const emergencyToggle = (state,setState, data) => {
        toggle(state,setState)
        setToggleEmergency(data)

    }

    useEffect(() => {
        axios.get(`${axios.defaults.baseURL}/people_in_emergency`, headers)
        .then((response)=>{
            setEmergencies(response.data)
        });
    }, []);
    
    
  return (
      <>
        {emergencies.map((emergency)=>{
            return(
                <div className="flex" onClick={()=>{emergencyToggle(showToggle,setShowToggle, emergency)}}>
                    <div>{emergency.emergency_type}</div>
                    <div>{emergency.first_name}</div>
                    <div>{emergency.last_name}</div>
                </div>
            )
        })}

        <EmergencyShow toggleEmergency={showToggle} emergencyData={toggleEmergency}/>
        
      </>
  );
};

export default Admin;
