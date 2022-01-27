import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router'
import { logout } from '../utils/logout';
import Emergencies from './Emergencies';
import { toggle } from '../utils/toggle';
import Archive from './Archive';
import AppName from './AppName';

const Admin = () => {

  let navigate = useNavigate()
  const [archiveMode, setArchiveMode] = useState(false)
    
  return (
      <div className="bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen">
        <div className="container">
          <div className="container flex justify-end pt-3">
            <button className="fas fa-users text-white px-2 text-xl hover:text-gray-300" onClick={()=>{navigate("/users")}}></button>
            <button className="fas fa-archive text-white px-2 text-xl hover:text-gray-300" onClick={()=>{toggle(archiveMode,setArchiveMode)}}></button>
          </div>
          <AppName/>
          {archiveMode?<Archive/>:<Emergencies/>}
          <button onClick={()=>{logout(navigate)}}>Logout</button>
        </div>
      </div>
  );
};

export default Admin;
