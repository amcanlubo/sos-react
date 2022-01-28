import React, { useRef, useState } from 'react';
import axios from 'axios';
import AppName from './AppName';
import { useNavigate } from 'react-router';

const Register = () => {

    let email = useRef(null)
    let first_name = useRef(null)
    let last_name = useRef(null)
    let mobile_number = useRef(null)
    let password = useRef(null)
    let password_confirmation = useRef(null)
    const [errors,setErrors] = useState([])
    const navigate = useNavigate()


    const toast = () => {
        toast.error('Check Errors', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    

    const handleSignup = (e) => {

        e.preventDefault()

        let data = {
            user:{
                email: email.current.value,
                first_name: first_name.current.value,
                last_name: last_name.current.value,
                mobile_number: mobile_number.current.value,
                password: password.current.value,
                password_confirmation: password_confirmation.current.value
            }
            
        }

        axios.post(`${axios.defaults.baseURL}/users`,data)
        .then((response)=>{
            navigate('/confirm')

        })
        .catch((error)=>{
            let errs = error.response.data.errors
            let errorList = []
            
            for (let key in errs) {
                if (errs.hasOwnProperty(key)) {
                    let value = errs[key];
                    setErrors([...errors,`${key} ${value}`])
                }
            }
            // errs.email?alert(errs.email):errs.password_confirmation?alert(errs.password_confirmation):alert(errs.password)
        })
    }
    

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
            <AppName/>
            <div className="max-w-md w-11/12 bg-gray-900 rounded p-6 space-y-4 rounded-md mx-4">
                
                <form onSubmit={handleSignup}>
                    
                    <div className="mb-4">
                        <p className="text-gray-400">Create an Account</p>
                        <h2 className="text-xl font-bold text-white">Join our community</h2>
                    </div>
                    <div className="mb-4">
                        {errors.map((error)=>{
                            console.log(errors)
                            return(
                                <p className="text-white font-light">{errors}</p>
                            )
                        })
                                    
                        }
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-400">email</label>
                        <input type="email" ref={email} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Email" required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="first_name" className="text-gray-400">first name</label>
                        <input type="text" ref={first_name} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="First Name"  required/>   
                    </div>

                    <div className="mb-4">
                        <label htmlFor="last_name" className="text-gray-400">last name</label>
                        <input type="text" ref={last_name} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Last Name"  required/>     
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobile_number" className="text-gray-400">mobile number</label>
                        <input type="number" ref={mobile_number} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Mobile Number"  required/>   
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="text-gray-400">password</label>
                        <input type="password" ref={password} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Password"  required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="text-gray-400">password confirmation</label>
                        <input type="password" ref={password_confirmation} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Password confirmation"  required/>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign up</button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex flex-row items-center">
                            <p className="ml-2 text-sm font-normal text-gray-400">Already have an account? <a className="text-blue-600 hover:underline" href="/">Log In</a></p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register