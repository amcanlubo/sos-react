import React, { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'
import {useRef} from 'react'
import AppName from './AppName'

const Login = () => {

    let navigate = useNavigate()
    let userEmail = useRef(null)
    let userPassword = useRef(null)

    useEffect(() => {
        if(sessionStorage.getItem('userData') && JSON.parse(sessionStorage.getItem('userData')).is_admin===true){
            navigate('/admin')
        }
        else if(sessionStorage.getItem('userData') && JSON.parse(sessionStorage.getItem('userData')).is_admin===false){
            navigate('/home')
        }
    }, []);

    

    const handleLogin = (e) => {
        e.preventDefault()

        const userData={
            user:{
                email: userEmail.current.value,
                password: userPassword.current.value,
            }
        }

        axios.post(`${axios.defaults.baseURL}/users/login`, userData)
            .then((data)=>{
                let userData = data.data.user
                let token = data.data.token
                navigate('/home')
                
                sessionStorage.setItem('token', JSON.stringify(token))
                sessionStorage.setItem('userData', JSON.stringify(userData))
                userData.is_admin?navigate('/admin'):navigate('/home')
            })

            .catch((error) => console.log(error))
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
            <div className="pb-6"><AppName/></div>
            <div className="max-w-md w-11/12 bg-gray-900 rounded p-6 rounded-md">
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <p className="text-gray-400">Sign In</p>
                        <h2 className="text-xl font-bold text-white">Join our community</h2>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-400">email</label>
                        <input type="email" ref={userEmail} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Email"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="text-gray-400">password</label>
                        <input type="password" ref={userPassword} className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" placeholder="Password"/>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Log In</button>
                    </div>
                </form>

                <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center">
                        <p className="ml-2 text-sm font-normal text-gray-400">Don't have an account? <a className="text-blue-600 hover:underline" href="/register">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
