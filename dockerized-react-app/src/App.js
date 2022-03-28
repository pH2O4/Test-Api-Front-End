import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './componentes/Home'
import RegisterForm from './componentes/Register'

export default props =>

    <div className="App">
 <Routes>
      <Route path="/" element={<RegisterForm/>} />
      <Route path="/Home" element={<Home/>} />
    </Routes>
    </div>



