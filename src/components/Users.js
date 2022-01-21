import React, {useState,useEffect} from 'react';
import axios from 'axios';
import AdminEdit from './AdminEdit';
import AdminShow from './AdminShow';
import { toggle } from '../utils/toggle';

const Users = () => {

    const [users,setUsers] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [show, setShow] = useState(false)

    const [user, setUser] = useState()


    if (JSON.parse(sessionStorage.getItem('userData'))){
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        var token = JSON.parse(sessionStorage.getItem('token'))
    }
    

    let headers = { headers: {
        "Authorization": `Token ${token}`,
        "X-Requested-With": "XMLHttpRequest",
    }}

    const showUsers = () => {
        axios.get(`${axios.defaults.baseURL}/all_users`, headers)
        .then((response)=>{
            setUsers(response.data)
        })
    }

    useEffect(() => {
        showUsers()
    }, []);

    const userToggle = (state, setState, data) => {
        toggle(state,setState)
        setUser(data)
    }

    const deleteUser = (id) => {
        axios.delete(`${axios.defaults.baseURL}/delete/${id}`, headers)
            .then((response)=>{
                console.log(response)
                showUsers()
            })
    }

    
    

    

  return (
    <div>
        {users.map((user)=>{
            return(
                <div>
                <div>{user.first_name}</div>
                <button onClick={()=>{userToggle(isEditing,setIsEditing,user)}}>edit profile</button>
                <button onClick={()=>{userToggle(show,setShow,user)}}>show</button>
                <button onClick={()=>{deleteUser(user.id)}}>delete</button>
                </div>
            )
        })}
        <AdminEdit isEditing={isEditing} user={user} showUsers={showUsers} setIsEditing={setIsEditing} setShow={setShow}/>
        <AdminShow show={show} user={user} setShow={setShow}/>
    </div>
    );
};

export default Users;
