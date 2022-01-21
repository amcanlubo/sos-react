import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Settings from './components/Settings';
import Admin from './components/Admin';
import Archive from './components/Archive';
import AdminRegister from './components/AdminRegister';
import React from 'react';
import Users from './components/Users'
import Register from './components/Register'

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';



function App() {

  axios.defaults.baseURL = "http://localhost:3000/api"

  return (
    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/settings" element={<Settings />}/>
      <Route exact path="/admin" element={<Admin />}/>
      <Route exact path="/archive" element={<Archive />}/>
      <Route exact path="/users" element={<Users />}/>
      <Route exact path="/register" element={<Register />}/>
      <Route exact path="/admin/register" element={<AdminRegister />}/>
    </Routes>
  );
}

export default App;
