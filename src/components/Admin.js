import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router'
import { logout } from '../utils/logout';
import Emergencies from './Emergencies';
import { toggle } from '../utils/toggle';

const Admin = () => {

  let navigate = useNavigate()
  const [archiveMode, setArchiveMode] = useState(false)
    
  return (
      <div className="bg-gray-800">
        <div className="container">
          <button onClick={()=>{toggle(archiveMode,setArchiveMode)}}><i class="fas fa-archive text-white p-2 top-0 right-0 absolute text-xl"></i></button>
          <Emergencies archiveMode={archiveMode}/> 
          <button onClick={()=>{logout(navigate)}}>Logout</button>
        </div>
      </div>
  );
};

export default Admin;
