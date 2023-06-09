import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Course from './courses';
import Inquiry from './inquiry';
import Adminhome from './admin';
import Adminlogin from './adminlogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/course' element={<Course/>}></Route>
        <Route path='/inquiry' element={<Inquiry/>}></Route>
        <Route path='/admin/login' element={<Adminlogin/>}></Route>
        <Route path='/admin' element={<Adminhome/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
