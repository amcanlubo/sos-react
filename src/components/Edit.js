import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import AppName from './AppName'
import Navbar from './Navbar'
import { toast } from 'react-toastify'

const EditModal = () => {
    const first_name = useRef()
    const last_name = useRef()
    const mobile_number = useRef()
    const email = useRef()
    const password = useRef()
    const passwordConfirmation = useRef()
    const navigate = useNavigate()
    let isSuccess = false
        
        


    
    var userData = JSON.parse(sessionStorage.getItem('userData'))
    var token = JSON.parse(sessionStorage.getItem('token'))


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
        else if (password.current.value !== passwordConfirmation.current.value){
            toast.error("Password Confirmation doesn't match Password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }

        if(isSuccess){
            axios.patch(`${axios.defaults.baseURL}/user`, {"user": data}, headers)
                .then((response)=>{
                    sessionStorage.setItem('userData',JSON.stringify(response.data))
                    navigate('/info')
                    toast.success("Account Updated", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                })

                .catch((error)=>{
                    console.log(error)
                })
            }
        }

        const editModal = () => {
            
            return(
                <div className="flex flex-col items-center bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen">
                    <Navbar/>
                    <AppName/>
                    <div className="bg-white flex flex-col w-full rounded-md  md:w-4/5 mx-2 p-6">
                        <form onSubmit={(e)=>{handleEdit(e)}}>
                            <div className="mb-4">
                                <p className="text-2xl font-bold">EDIT USER DETAILS</p>
                            </div>
                            <div className="mb-4">
                            <label>first name</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={first_name} defaultValue={userData.first_name} ></input>
                            </div>
                            <div className="mb-4">
                            <label>last name</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={last_name} defaultValue={userData.last_name}></input>
                            </div>
                            <div className="mb-4">
                            <label>mobile number</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={mobile_number} defaultValue={userData.mobile_number}></input>
                            </div>
                            <div className="mb-4">
                            <label>email</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" ref={email} defaultValue={userData.email}></input>
                            </div>
                            <div className="mb-4">
                            <label>password</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type='password' ref={password}></input>
                            </div>
                            <div className="mb-4">
                            <label>password confirmation</label>
                            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type='password' ref={passwordConfirmation}></input>
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
    editModal()
  );
};

export default EditModal;
