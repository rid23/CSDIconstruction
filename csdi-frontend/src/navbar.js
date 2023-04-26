import React from "react"
import "./navbar.css"
import logo from  "./universitylogo.png"

export const Navbartop = () => {




    return (
        <>
        <div className="university-logo-container">
            <img className="uni-logo" src={logo}/>
            <h1>CSDI</h1>
        </div>
        </>
    )
}

export const Navbarsecond = () => {

    return (
        <div className="menu-container">
            <a className="menu">Home</a>
            <a className="menu">Courses</a>
            <a className="menu">Gallary</a>
            <a className="menu">Faculty</a>
            <a className="menu">Eshtablished</a>
            <a className="menu">Home</a>
        </div>
    )
}
