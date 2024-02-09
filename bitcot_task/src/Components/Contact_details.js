import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact_details() {
    const navigate=useNavigate()
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        number: "",
        address: ""
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("viewdata"));
        console.log(savedData)
        if (savedData) {
            setContactDetails(savedData);
        }
    }, []);

    return (
        <div className="row container">
            <div className="col-md-4 container-fluid">
                <div className="well">
                    <span>Contact details</span>
                    <button  style={{ float: "right" }}><span class="glyphicon glyphicon-remove-sign" onClick={()=>{navigate("/")}}></span></button>
                </div>
                
                <div className="well">
                    <label>Name:</label>
                    <span>{contactDetails.name}</span><br/>
                    <label>Email:</label>
                    <span>{contactDetails.email}</span><br/>
                    <label>Number:</label>
                    <span>{contactDetails.number}</span><br/>
                    <label>Address:</label>
                    <span>{contactDetails.address}</span><br/>
                </div>
            </div>
        </div>
    );
}

export default Contact_details;
