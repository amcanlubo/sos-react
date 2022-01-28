import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router'
import { toggle } from '../utils/toggle';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const AdminEdit = ({isEditing, user, showUsers, setIsEditing}) => {
    const first_name = useRef()
    const last_name = useRef()
    const mobile_number = useRef()
    const email = useRef()
    const password = useRef()
    const passwordConfirmation = useRef()
    let isSuccess = false

    
    var token = JSON.parse(sessionStorage.getItem('token'))

    

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
                    toast.success('Account Updated', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    showUsers()
                    setIsEditing(false)
                })

                .catch((error)=>{
                    console.log(error)
                })
            }
        }

        const editModal = () => {
            return(
                <div className="fixed w-screen h-screen bg-gray-900/75 flex justify-center items-center top-0">
                    <div className="bg-white flex flex-col w-full rounded-md  md:w-4/5 mx-2 p-6">
                        <button className="self-end px-2 fas fa-times-circle hover:text-red-500" onClick={()=>{toggle(isEditing,setIsEditing)}}></button>
                        <form onSubmit={(e)=>{handleEdit(e)}}>
                            <div className="mb-4">
                                <p className="text-2xl font-bold">EDIT USER DETAILS</p>
                            </div>
                            <div className="mb-4">
                            <label>first name</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={first_name} defaultValue={user.first_name} ></input>
                            </div>
                            <div className="mb-4">
                            <label>last name</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={last_name} defaultValue={user.last_name}></input>
                            </div>
                            <div className="mb-4">
                            <label>mobile number</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={mobile_number} defaultValue={user.mobile_number}></input>
                            </div>
                            <div className="mb-4">
                            <label>email</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={email} defaultValue={user.email}></input>
                            </div>
                            <div className="mb-4 mt-8">
                                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-bold text-gray-50 transition duration-200">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
  return (
    isEditing?editModal():<></>
  );
};

export default AdminEdit;
