import React from "react";
import AdminSideNav from "./adminsidenav";
import "./admin.css"

function Adminhome() {

    return (
        <>
        <div className="Admin-home">
            <AdminSideNav/>
            <div className="admin-playground">
                <h1> Administrator Page</h1>
            </div>
        </div>
        
        </>
    )
}

export default Adminhome;