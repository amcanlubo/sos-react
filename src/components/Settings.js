
import React, { useState } from 'react'
import EditModal from './EditModal'
import { useNavigate } from 'react-router'
import {toggle} from '../utils/toggle'
import { logout } from '../utils/logout'

const Settings = () => {


    const [isEditing, setIsEditing] = useState(false)
    let navigate = useNavigate()

    

    return (
        <>
            <button onClick={()=>{toggle(isEditing,setIsEditing)}}>edit profile</button>
            <button onClick={()=>{logout(navigate)}}>Logout</button>
            <EditModal isEditing={isEditing}/>
        </>
    )
}

export default Settings
