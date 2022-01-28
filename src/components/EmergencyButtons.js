import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

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
                toast.success('Emergency sent!', {
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
        <ul className="flex rounded-lg divide-x my-4 divide-gray-200 shadow sm:flex items-center dark:divide-gray-700">
            <li className="w-full">
                <a  onClick={()=>{Emergency('Police')}} className="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">Police</a>
            </li>
            <li className="w-full">
                <a onClick={()=>{Emergency('Medic')}} className="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">Medic</a>
            </li>
            <li className="w-full">
                <a  onClick={()=>{Emergency('Fire')}} className="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">Fire</a>
            </li>
            <li className="w-full">
                <a onClick={()=>{Emergency('Nat Disaster')}} className="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">Calamity</a>
            </li>
        </ul>
    )
}

export default EmergencyButtons
