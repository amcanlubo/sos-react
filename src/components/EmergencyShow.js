import React, {useState,useRef, useEffect} from 'react';
import axios from 'axios';
import GoogleApiWrapper from './GoogleMaps'
import { getTime, getDate } from '../utils/date';
import { toggle } from '../utils/toggle';

const EmergencyShow = ({emergencyData, showToggle, setShowToggle}) => {


    useEffect(() => {
        showToggle?document.body.style.overflow = 'hidden':document.body.style.overflow = 'unset';
    }, [showToggle]);
    

    const emergencyModal = () => {
        

        return(
        <div className="fixed w-screen h-screen bg-gray-900/75 flex justify-center items-center top-0">
            <div className="bg-white flex flex-col w-full rounded-md h-4/5 md:w-4/5 mx-2 p-2">
                <button className="self-end px-2 hover:text-red-700" onClick={()=>{toggle(showToggle,setShowToggle)}}>x</button>
                <div className="relative w-full h-4/5">
                    <GoogleApiWrapper lat={emergencyData.latitude} lng={emergencyData.longitude}/>
                </div>
                <div className="flex flex-col py-1">
                    <div>{emergencyData.latitude}, {emergencyData.longitude}</div>
                    <div>{emergencyData.first_name} {emergencyData.last_name}</div>
                    <div>{emergencyData.emergency_type}</div>
                    <div>{getDate(emergencyData.created_at)}</div>
                    <div>{getTime(emergencyData.created_at)}</div>
                </div>
            </div>
        </div>
        )
    }
    return (
            showToggle?emergencyModal():<></>
    );
};

export default EmergencyShow;
