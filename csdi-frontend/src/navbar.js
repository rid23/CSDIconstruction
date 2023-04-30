import React from "react"
import "./navbar.css"
import logo from  "./universitylogo.png"

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
            <a className="menu">Home</a>
            <a className="menu">Courses</a>
            <a className="menu">Gallery</a>
            <a className="menu">Faculty</a>
            <a className="menu">About</a>
            <a className="menu">Contact</a>
            
            
           
        </div>
    )
}
