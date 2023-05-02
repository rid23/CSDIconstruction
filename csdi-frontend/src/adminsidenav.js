import React, { useEffect, useState } from "react"
import "./adminsidenav.css"
import { store, adminStore } from "./store";
import { useNavigate } from "react-router-dom";


function AdminSideNav () {
    const navigate = useNavigate();
    const [checkstore, setstore] = useState(store.getState())
    store.subscribe(()=> setstore(store.getState()))
    const [checkadminStore, setadminStore] = useState(adminStore.getState())
    adminStore.subscribe(()=> setadminStore(adminStore.getState()))

    useEffect(()=> {
        // if (checkadminStore.login ===false ){
        //     navigate('/admin/login')
        // }

    })
    
    

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
                <div className="adminSN-menu"> Download Applications </div>
                <div className="adminSN-menu"> Change Password </div>
                <div className="adminSN-menu"> Log Out </div>
            </div>
            <div></div>
        </div> 
    )
}

export default AdminSideNav;