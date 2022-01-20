import React, {useState,useRef, useEffect} from 'react';
import axios from 'axios';
import GoogleApiWrapper from './GoogleMaps'


const EmergencyShow = ({emergencyData, toggleEmergency}) => {
      

    const emergencyModal = () => {
        

        return(
        <div>
            <GoogleApiWrapper lat={emergencyData.latitude} lng={emergencyData.longitude}/>
            {emergencyData.first_name}
        </div>
        )
    }
    return (
            toggleEmergency?emergencyModal():<></>
    );
};

export default EmergencyShow;
