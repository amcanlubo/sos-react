import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Settings from './components/Settings';
import Admin from './components/Admin';
import React from 'react';

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
    </Routes>
  );
}

export default App;
