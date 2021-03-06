import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toggle } from '../utils/toggle';
import EmergencyShow from './EmergencyShow';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { getTime, getDate } from '../utils/date';
import { ToastContainer, toast } from 'react-toastify';

const Emergencies = ({archiveMode}) => {

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

    const displayEmergencies = () => {
        axios.get(`${axios.defaults.baseURL}/people_in_emergency`, headers)
        .then((response)=>{
            setEmergencies(response.data)
        });
    }

    useEffect(() => {
        displayEmergencies()
    }, [archiveMode]);

    
    const emergencyResponded = (id) => {
        axios.patch(`${axios.defaults.baseURL}/toggle_emergency`,{
            "id":id
        }, headers)
         .then((response)=>{
             displayEmergencies()
             toast.success('Responded Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
         })
    }

    
    
  return (
      <>
        
        {cable || setCable(<ActionCableConsumer 
          channel={'EmergenciesChannel'}
          onReceived={ displayEmergencies }
        />)}
        <div className="mb-4 sticky top-0 grid grid-cols-4 text-center p-2 bg-gradient-to-r from-gray-800/90 to-blue-900/90 font-medium text-lg text-white">
            <span>Name</span>
            <div>Emergency Type</div>
            <div>Date & Time</div>
            <div>Action</div>
        </div>
        {emergencies.map((emergency)=>{
            return(
                <div className="card">
                    <span>
                        {emergency.first_name} {emergency.last_name}
                    </span>
                    <div className="grow-0">{emergency.emergency_type}</div>
                    <div className="flex flex-col items-center text-sm">
                        <p>{getDate(emergency.created_at)}</p>
                        <p>{getTime(emergency.created_at)}</p>
                    </div>
                    <div>
                        <button className="fas text-lg p-2 fa-info-circle hover:text-yellow-500"  onClick={()=>{emergencyToggle(showToggle,setShowToggle, emergency)}}></button>
                        <button className="fas text-lg p-2 fa-check-circle hover:text-green-500" onClick={()=>{emergencyResponded(emergency.id)}}></button>
                    </div>
                </div>
            )
        })}
        
        <EmergencyShow showToggle={showToggle} setShowToggle={setShowToggle} emergencyData={toggleEmergency}/>
      </>
  );
};

export default Emergencies;
