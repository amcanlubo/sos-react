import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toggle } from '../utils/toggle';
import EmergencyShow from './EmergencyShow';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { getTime, getDate } from '../utils/date';

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
        <div className="mb-4 sticky top-0 grid grid-cols-4 text-center p-2 bg-gray-800/90 font-bold text-lg text-white">
            <span>Name</span>
            <div>Emergency Type</div>
            <div>Date & Time</div>
            <div>Action Taken</div>
        </div>
        {emergencies.map((emergency)=>{
            return(
                <div className="card" onClick={()=>{emergencyToggle(showToggle,setShowToggle, emergency)}}>
                    <span>
                        {emergency.first_name} {emergency.last_name}
                    </span>
                    <div className="grow-0">{emergency.emergency_type}</div>
                    <div className="flex flex-col items-center">
                        <p>{getDate(emergency.created_at)}</p>
                        <p>{getTime(emergency.created_at)}</p>
                    </div>
                    <button className="transition ease-in-out delay-150 hover:scale-110 bg-gray-800 p-2 rounded-md hover:bg-gray-900 hover:text-lime-400" onClick={()=>{emergencyResponded(emergency.id)}}>Responded</button>
                </div>
            )
        })}
        
        <EmergencyShow toggleEmergency={showToggle} emergencyData={toggleEmergency}/>
       
      </>
  );
};

export default Emergencies;
