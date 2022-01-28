import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router'
import { logout } from '../utils/logout';
import Emergencies from './Emergencies';
import { toggle } from '../utils/toggle';
import Archive from './Archive';
import AppName from './AppName';
import Navbar from './Navbar';


const Admin = () => {

  const [archiveMode, setArchiveMode] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
      let userData  = sessionStorage.getItem('userData')
      if(!userData || JSON.parse(userData).is_admin === false){
        navigate('/')
      }
    }, []);
  
  
    
  return (
      <>
      <div className="bg-gradient-to-r from-gray-800 to-blue-900 min-h-screen">
        <div className="container">
          <Navbar archiveMode={archiveMode} setArchiveMode={setArchiveMode}/>
          <AppName/>
          {archiveMode?<Archive/>:<Emergencies/>}
        </div>
      </div>
      </>
  );
};

export default Admin;
