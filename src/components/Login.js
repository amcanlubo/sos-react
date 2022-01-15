import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'
import {useRef} from 'react'

const Login = () => {

    let navigate = useNavigate()
    let userEmail = useRef(null)
    let userPassword = useRef(null)

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
                console.log('success')
                const { headers }=data

                navigate('/home',{  
                    state: {headers}
                })

                sessionStorage.setItem('headers', JSON.stringify(data))

                console.log(data.data)
            })

            .catch((error) => console.log(error))
    }

    return (

        <form onSubmit={(e)=>{ handleLogin(e) }}>
            <label htmlFor="email">email</label>
            <input type="email" ref={userEmail}/>
            <label htmlFor="password">password</label>
            <input type="password" ref={userPassword}/>
            <button type="submit">button</button>
        </form>
    )
}

export default Login
