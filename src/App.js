import './App.css';
import Home from './components/Home';
import Login from './components/Login';
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
    </Routes>
  );
}

export default App;
