import React, { useRef } from 'react';
import axios from 'axios';
import { defaults } from 'autoprefixer';

const Register = () => {

    let email = useRef(null)
    let first_name = useRef(null)
    let last_name = useRef(null)
    let mobile_number = useRef(null)
    let password = useRef(null)
    let password_confirmation = useRef(null)

    

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
            console.log(response)
        })
    }
    

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4 rounded-md mx-4">
                
                <form onSubmit={handleSignup}>
                    
                    <div className="mb-4">
                        <p className="text-gray-400">Create an Account</p>
                        <h2 className="text-xl font-bold text-white">Join our community</h2>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-400">email</label>
                        <input type="email" ref={email} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Email"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="first_name" className="text-gray-400">first name</label>
                        <input type="text" ref={first_name} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="First Name"/>   
                    </div>

                    <div className="mb-4">
                        <label htmlFor="last_name" className="text-gray-400">last name</label>
                        <input type="text" ref={last_name} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Last Name"/>     
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobile_number" className="text-gray-400">mobile number</label>
                        <input type="number" ref={mobile_number} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Mobile Number"/>   
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="text-gray-400">password</label>
                        <input type="password" ref={password} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Password"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password_confirmation" className="text-gray-400">password confirmation</label>
                        <input type="password" ref={password_confirmation} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Password confirmation"/>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign up</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Register