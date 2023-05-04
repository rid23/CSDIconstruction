import React from "react";
import "./adminlogin.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Adminlogin() {

    return (
        <div className="admin-login-page">
            <div className="admin-login-form">
                <div className="admin-login-person-icon">
                    <AccountCircleIcon/>
                </div>
                <label className="admin-login-lebel">User Name</label>
                <input className="admin-login-input" placeholder="Enter Username"/>
                <label className="admin-login-lebel" >Password</label>
                <input className="admin-login-input" placeholder="Enter Password" />
                <button className="admin-login-button">Login</button>
            </div>
        </div>
    )
}



export default Adminlogin