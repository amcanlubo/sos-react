
import React, { useState } from 'react'
import EditModal from './EditModal'
import { useNavigate } from 'react-router'

const Settings = () => {


    const [isEditing, setIsEditing] = useState(false)
    let navigate = useNavigate()

    const toggle = (state,setState) => {
        state?setState(false):setState(true)
    }

    const logout = ()=>{
        sessionStorage.clear()
        navigate("/")
    }

    return (
        <>
            <button onClick={()=>{toggle(isEditing,setIsEditing)}}>edit profile</button>
            <button onClick={()=>{logout()}}>Logout</button>
            <EditModal isEditing={isEditing}/>
        </>
    )
}

export default Settings
