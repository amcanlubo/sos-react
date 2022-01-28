import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Edit from './components/Edit';
import Admin from './components/Admin';
import Archive from './components/Archive';
import AdminRegister from './components/AdminRegister';
import React from 'react';
import Users from './components/Users'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckEmail from './components/CheckEmail';
import UserInfo from './components/UserInfo';

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';



function App() {

  // axios.defaults.baseURL = "https://acsc-sos.herokuapp.com/api"
  axios.defaults.baseURL = "http://localhost:3000/api"

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        />
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/home" element={<Home />}/>
        <Route exact path="/edit" element={<Edit />}/>
        <Route exact path="/admin" element={<Admin />}/>
        <Route exact path="/archive" element={<Archive />}/>
        <Route exact path="/users" element={<Users />}/>
        <Route exact path="/info" element={<UserInfo />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/confirm" element={<CheckEmail />}/>
        <Route exact path="/admin/register" element={<AdminRegister />}/>
      </Routes>
      </>
  );
}

export default App;
