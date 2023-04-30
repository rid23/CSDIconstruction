import React from "react";
import "./inquiry.css"
import CloseIcon from '@mui/icons-material/Close';


const Inquiry = () => {

    return (
        <>
        <div className='inquiry-main'>
            <div className="inquiry-form" >
                <h2 className='inquiry-headline' >Please Provide These Informations To Download The Brochure</h2>
                
                <div className="inquiry-fields">
                    <input className= 'inquiry-input'  placeholder="Enter Your Full Name"  />
                    <input className= 'inquiry-input'  placeholder="Enter Your Email If You Have Any"  />
             
        
                    <input className= 'inquiry-input'   placeholder="Enter Your 10 Digit Mobile Nuumber"  />

                    <button className='inquiry-download-button' >Download Brochure</button>

                    <div className='inquiry-terms' >
                    By proceeding ahead you expressly agree to the CSDI 

                    <a href='#' > Terms & Conditions </a>
                    and 
                    <a href='#' > Privacy Policy</a>
                    </div>

                </div>
                <CloseIcon className='inquiry-close' />
            </div>

            <div className = 'inquiry-why' >

            </div>
        </div>
        </>
    )
}

export default Inquiry