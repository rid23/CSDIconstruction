import React from "react"
import "./navbar.css"
import logo from  "./universitylogo.png"
import { store } from "./store"

export const Navbartop = () => {

    return (
        <>
        <div className="university-logo-container">
            <div className='nav-logo'>
                <img className="uni-logo" src={logo}/>
                <h1>CSDI</h1>
            </div>
            <Navbarsecond />
        </div>
        </>
    )
}

export const Navbarsecond = () => {

    return (
        <div className="menu-container">
            <a onClick={()=> store.dispatch({type: 'setHome'})} className="menu">Home</a>
            <a onClick={()=> store.dispatch({type: 'setCourse'})} className="menu">Courses</a>
            <a onClick={()=> store.dispatch({type: 'setGallery'})} className="menu">Gallery</a>
            <a onClick={()=> store.dispatch({type: 'setAbout'})} className="menu">About</a>
            <a onClick={()=> store.dispatch({type: 'setContact'})} className="menu">Contact</a>
            <a onClick={()=> store.dispatch({type: 'setFaculty'})} className="menu">Faculty</a>
            
            
           
        </div>
    )
}
