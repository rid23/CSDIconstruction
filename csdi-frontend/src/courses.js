import React from "react";
import "./courses.css"
import { store } from "./store";

function Course() {

    return (
        <div className="course-container">
            {[1,2,3,4,5,6,7,8].map(()=> 
            
            (<div className="Course">
                <h1 className="course-h1">Bachelor's Degree in Civil Engineering</h1>
                <div className="course-details-container">
                    <h1 className="course-details">Annual fee : </h1>
                    <h1 className="course-details2">194,800</h1>
                </div>

                <div className="course-details-container">   
                    <h1 className="course-details">Duration : </h1>
                    <h1 className="course-details2">3 years</h1>
                </div>
                <div className="course-details-container">
                    <h1 className="course-details">Study Mode :  </h1>
                    <h1 className="course-details2">Regular</h1>
                </div>
                
                <button className="apply-button">Apply Now</button>
                <button onClick={()=> store.dispatch({type: "setPopupDnld"})} className='brochure-button'>Download Brochure</button>
            </div>
            )
            )}
            
        </div>
    )
}

export default Course;