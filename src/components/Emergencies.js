import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toggle } from '../utils/toggle';
import EmergencyShow from './EmergencyShow';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Emergencies = () => {

    const [emergencies,setEmergencies] = useState([])
    const [showToggle,setShowToggle] = useState(false)
    const [toggleEmergency, setToggleEmergency] = useState()
    
    
    if (JSON.parse(sessionStorage.getItem('userData'))){
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        var token = JSON.parse(sessionStorage.getItem('token'))
    }

    let headers = { headers: {
        "Authorization":   `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest",
    }}
    

    const handleReceivedEmergency = emergency => {
        console.log(emergency)
        setEmergencies([...emergencies, emergency])
    }
   
    const emergencyToggle = (state,setState, data) => {
        toggle(state,setState)
        setToggleEmergency(data)

    }

    const displayEmergencies = () => {
        axios.get(`${axios.defaults.baseURL}/people_in_emergency`, headers)
        .then((response)=>{
            setEmergencies(response.data)
        });
    }

    useEffect(() => {
        displayEmergencies()
    }, []);

    
    const emergencyResponded = (id) => {
        axios.patch(`${axios.defaults.baseURL}/toggle_emergency`,{
            "id":id
        }, headers)
         .then((response)=>{
             displayEmergencies()
         })
    }
    
  return (
      <>
        <ActionCableConsumer 
          channel={'EmergenciesChannel'}
          onReceived={ handleReceivedEmergency }
        />
        
        {emergencies.map((emergency)=>{
            return(
                <div className="flex" onClick={()=>{emergencyToggle(showToggle,setShowToggle, emergency)}}>
                    <div>{emergency.emergency_type}</div>
                    <div>{emergency.first_name}</div>
                    <div>{emergency.last_name}</div>
                    <button onClick={()=>{emergencyResponded(emergency.id)}}>button</button>
                </div>
            )
        })}
        
        <EmergencyShow toggleEmergency={showToggle} emergencyData={toggleEmergency}/>
       
      </>
  );
};

export default Emergencies;
