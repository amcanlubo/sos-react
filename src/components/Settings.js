
import React, { useState } from 'react'
import EditModal from './Edit'
import { useNavigate } from 'react-router'
import {toggle} from '../utils/toggle'
import { logout } from '../utils/logout'

const Settings = () => {


    const [isEditing, setIsEditing] = useState(false)
    let navigate = useNavigate()

    

    return (
        <>
            <EditModal isEditing={isEditing}/>
        </>
    )
}

export default Settings
