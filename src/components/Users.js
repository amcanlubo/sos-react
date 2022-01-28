import React, {useState,useEffect} from 'react';
import axios from 'axios';
import AdminEdit from './AdminEdit';
import AdminShow from './AdminShow';
import AppName from './AppName';
import { toggle } from '../utils/toggle';
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Users = () => {

    const [users,setUsers] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [show, setShow] = useState(false)

    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        let userData  = sessionStorage.getItem('userData')
        if(!userData || JSON.parse(userData).is_admin === false){
          navigate('/')
        }
      }, []);

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
                toast.success('Account Deleted', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setShow(false)
                showUsers()
            })
    }

    
    

    

  return (
    <>
    <div className="bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen">
        <Navbar/>
        <AppName/>
        <div className="container">
            {users.map((user)=>{
                return(
                    <div onClick={()=>{userToggle(show,setShow,user)}} className="card-users-mobile">
                        <div>{user.first_name} {user.last_name}</div>
                        
                    </div>
                )
            })}
        </div>
    </div>
    <AdminEdit isEditing={isEditing} user={user} showUsers={showUsers} setIsEditing={setIsEditing} setShow={setShow} show={show}/>
    <AdminShow userToggle={userToggle} deleteUser={deleteUser} show={show} user={user} setShow={setShow} isEditing={isEditing} setIsEditing={setIsEditing}/>
    </>
    
    );
};

export default Users;
