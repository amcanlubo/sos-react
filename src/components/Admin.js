import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router'
import { logout } from '../utils/logout';
import Emergencies from './Emergencies';

const Admin = () => {

    let navigate = useNavigate()
    
  return (
      <>
        <Emergencies />
        <button onClick={()=>{logout(navigate)}}>Logout</button>
      </>
  );
};

export default Admin;
