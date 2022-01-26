import React, {useState,useRef, useEffect} from 'react';
import axios from 'axios';
import GoogleApiWrapper from './GoogleMaps'
import { getTime, getDate } from '../utils/date';


const EmergencyShow = ({emergencyData, toggleEmergency}) => {
      

    const emergencyModal = () => {
        

        return(
        <div className="absolute w-screen h-screen flex justify-center items-center top-0 left-0 ">
            <div className="bg-white w-full h-3/4 mx-2 p-2">
                <div className="relative w-full h-4/5">
                    <GoogleApiWrapper lat={emergencyData.latitude} lng={emergencyData.longitude}/>
                </div>
                <div>{emergencyData.latitude}, {emergencyData.longitude}</div>
                <div>{emergencyData.first_name} {emergencyData.last_name}</div>
                <div>{emergencyData.emergency_type}</div>
                <div>{getDate(emergencyData.created_at)}</div>
                <div>{getTime(emergencyData.created_at)}</div>
            </div>
        </div>
        )
    }
    return (
            toggleEmergency?emergencyModal():<></>
    );
};

export default EmergencyShow;
