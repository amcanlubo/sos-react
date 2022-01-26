import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router'
import { logout } from '../utils/logout';
import Emergencies from './Emergencies';

const Admin = () => {

    let navigate = useNavigate()
    
  return (
      <div className="bg-gray-800">
        <div className="container">
          <Emergencies /> 
          <button onClick={()=>{logout(navigate)}}>Logout</button>
        </div>
      </div>
  );
};

export default Admin;
