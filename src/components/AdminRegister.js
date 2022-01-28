import React, { useRef, useEffect    } from 'react';
import axios from 'axios';
import { defaults } from 'autoprefixer';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';

const AdminRegister = () => {

    let email = useRef(null)
    let first_name = useRef(null)
    let last_name = useRef(null)
    let mobile_number = useRef(null)
    let password = useRef(null)
    const navigate = useNavigate()
    

    useEffect(() => {
        let userData  = sessionStorage.getItem('userData')
        if(!userData || JSON.parse(userData).is_admin === false){
          navigate('/')
        }
    }, []);


    const handleSignup = (e) => {

        e.preventDefault()

        let data = {
            user:{
                email: email.current.value,
                first_name: first_name.current.value,
                last_name: last_name.current.value,
                mobile_number: mobile_number.current.value,
                password: password.current.value
            }
            
        }

        axios.post(`${axios.defaults.baseURL}/users`,data)
        .then((response)=>{
            console.log(response)
        })
    }
    

    return (
        <div className="flex flex-col contianer justify-center p-2 items-center h-screen bg-gray-800">
            <div className="absolute top-0 w-full">
            <Navbar/>
            </div>
            <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4 rounded-md mx-4">      
                <form onSubmit={handleSignup}>
                    
                    <div className="mb-4">
                        <p className="text-gray-400">Create an Account</p>
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
                        <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign up this account</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default AdminRegister