import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router'

const AdminEdit = ({isEditing, user, showUsers, setIsEditing, setShow}) => {
    const first_name = useRef()
    const last_name = useRef()
    const mobile_number = useRef()
    const email = useRef()
    const password = useRef()
    const passwordConfirmation = useRef()
    let isSuccess = false

    
    if (JSON.parse(sessionStorage.getItem('userData'))){
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        var token = JSON.parse(sessionStorage.getItem('token'))
    }
    else{
        Navigate('/')
    }

    let headers = { headers: {
        "Authorization": `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest",
    }}


    const handleEdit = (e) => {
        e.preventDefault()
        var data = {
            first_name: first_name.current.value,
            last_name: last_name.current.value,
            mobile_number: mobile_number.current.value,
            email: email.current.value,
        }
        isSuccess=true

        if(isSuccess){
            axios.patch(`${axios.defaults.baseURL}/admin`, {"user": data, "id": user.id}, headers)
                .then((response)=>{
                    console.log(response)
                    showUsers()
                    setIsEditing(false)
                    setShow(true)
                })

                .catch((error)=>{
                    console.log(error)
                })
            }
        }

        const editModal = () => {
            return(
                <div className="flex justify-center items-center h-screen bg-gray-800 editModal">
                    <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4 rounded-md mx-4">
                        {/* <div className="editModal"> */}
                            <form onSubmit={(e)=>{handleEdit(e)}}>

                                <div className="mb-4">
                                    <p className="text-gray-400">Edit user details</p>
                                </div>

                                <label>first name</label>
                                <input ref={first_name} defaultValue={user.first_name} ></input><br/>
                                <label>last name</label>
                                <input ref={last_name} defaultValue={user.last_name}></input><br/>
                                <label>mobile number</label>
                                <input ref={mobile_number} defaultValue={user.mobile_number}></input><br/>
                                <label>email</label>
                                <input ref={email} defaultValue={user.email}></input><br/>
                                <button type="submit">submit</button>
                            </form>
                        {/* </div> */}
                    </div>
                </div>
            )
        }
  return (
    isEditing?editModal():<></>
  );
};

export default AdminEdit;
