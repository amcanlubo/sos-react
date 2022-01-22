import axios from 'axios'
import React from 'react'

const EmergencyButtons = ({pos, headers}) => {
    const Emergency = (type) => {
        let data = {
            longitude: pos.longitude,
            latitude: pos.latitude,
            emergency_type: type
        }
        console.log(headers)
        axios.post(`${axios.defaults.baseURL}/emergency`, data, headers)
            .then((response)=>{
                console.log(response.config.data)
            })
    }
    
    return (
        <div className="buttons">
            <button onClick={()=>{Emergency('Police')}}>Police</button>
            <button onClick={()=>{Emergency('Medic')}}>Medic</button>
            <button onClick={()=>{Emergency('Fire Dept.')}}>Fire Dept.</button>
            <button onClick={()=>{Emergency('Natural Disaster')}}>Natural Disaster</button>
        </div>
    )
}

export default EmergencyButtons
