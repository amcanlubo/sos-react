import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router'

const EditModal = ({isEditing}) => {
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
        console.log(password.current.value)
        console.log(passwordConfirmation.current.value)
        if(password.current.value === ''){
            var data = {
                first_name: first_name.current.value,
                last_name: last_name.current.value,
                mobile_number: mobile_number.current.value,
                email: email.current.value,
            }
            isSuccess=true
        }
        else if(password.current.value === passwordConfirmation.current.value){   
            var data = {
                first_name: first_name.current.value,
                last_name: last_name.current.value,
                mobile_number: mobile_number.current.value,
                email: email.current.value,
                password: password.current.value
            }
            isSuccess=true
        }

        if(isSuccess){
            axios.patch(`${axios.defaults.baseURL}/user`, {"user": data}, headers)
                .then((response)=>{
                    console.log(response)
                })

                .catch((error)=>{
                    console.log(error)
                })
            }
        }

        const editModal = () => {
            return(
                <div className="editModal">
                    <form onSubmit={(e)=>{handleEdit(e)}}>
                    <label>first name</label>
                    <input ref={first_name} defaultValue={userData.first_name} ></input><br/>
                    <label>last name</label>
                    <input ref={last_name} defaultValue={userData.last_name}></input><br/>
                    <label>mobile number</label>
                    <input ref={mobile_number} defaultValue={userData.mobile_number}></input><br/>
                    <label>email</label>
                    <input ref={email} defaultValue={userData.email}></input><br/>
                    <label>password</label>
                    <input ref={password} type="password" type="password" placeholder="password"></input><br/>
                    <label>password confirmation</label>
                    <input ref={passwordConfirmation} type="password" type="password" placeholder="password"></input><br/>
                    <button type="submit">submit</button>
                    </form>
                </div>
            )
        }
  return (
    isEditing?editModal():<></>
  );
};

export default EditModal;
