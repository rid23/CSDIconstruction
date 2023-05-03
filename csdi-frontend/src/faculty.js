import React from "react";
import './faculty.css'

function Faculty() {

    return (
        <>
            <div className="faculty-main">
                {[1,2,3,4,5,6].map(()=> 
                    (
                        <div className="faculty-container">
                            <img src="/static/images/faculty1.jpg" className="faculty-img"/>
                            <div className="faculty-details">
                                <h1 className="faculty-name"> Riddhi Bhattacharyya </h1>
                                <h1 className="faculty-name"> BE in Civil Engineering, ME in Civil Engineering </h1>
                                <h1 className="faculty-name"> 10yr+ Experience </h1>
                            </div>
                        </div>
                    )
                )}
                
            </div>
        </>
    )
}

export default Faculty;