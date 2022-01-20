import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Admin = () => {

    const [emergencies,setEmergencies] = useState([])

    if (JSON.parse(sessionStorage.getItem('userData'))){
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        var token = JSON.parse(sessionStorage.getItem('token'))
    }
    

    let headers = { headers: {
        "Authorization": `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest",
    }}

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
                <div>{emergency.emergency_type}</div>
            )
        })}
      </>
  );
};

export default Admin;
