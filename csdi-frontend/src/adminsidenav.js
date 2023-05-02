import React from "react"
import "./adminsidenav.css"



function AdminSideNav () {

    return (
        <div className="adminSN-main">
            <div className="adminSN-top">
                <h1 className="adminSN-h1">CSDI</h1>
                <h1 className="adminSN-h1"> AlipurDuar </h1>
            </div>
            <div className="adminSN-middle">
                <div className="adminSN-menu"> Courses </div>
                <div className="adminSN-menu"> Faculty </div>
                <div className="adminSN-menu"> Gallery </div>
            </div>
            <div></div>
        </div> 
    )
}

export default AdminSideNav;