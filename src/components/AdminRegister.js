import React, { useRef } from 'react';
import axios from 'axios';
import { defaults } from 'autoprefixer';

const AdminRegister = () => {

    let email = useRef(null)
    let first_name = useRef(null)
    let last_name = useRef(null)
    let mobile_number = useRef(null)
    let password = useRef(null)

    

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
        <div>
            <form onSubmit={handleSignup}>
            <label htmlFor="email">email</label>
            <input type="email" ref={email}/>
            <label htmlFor="first_name">first name</label>
            <input type="text" ref={first_name}/>
            <label htmlFor="last_name">last name</label>
            <input type="text" ref={last_name}/>
            <label htmlFor="mobile_number">mobile number</label>
            <input type="number" ref={mobile_number}/>
            <label htmlFor="password">password</label>
            <input type="password" ref={password}/>
            <button type="submit">button</button>
        </form>
        </div>
    );
};

export default AdminRegister