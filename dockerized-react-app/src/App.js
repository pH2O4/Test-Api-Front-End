import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import RegisterForm from './componentes/Register'

export default props =>

    <div className="App">
 <Routes>
      <Route path="/" element={<RegisterForm/>} />

    </Routes>
    </div>



