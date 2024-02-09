import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Add_contact() {
    const [dataArray, setDataArray] = useState([]);
    const name = useRef();
    const email = useRef();
    const number = useRef();
    const address = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const savedData = localStorage.getItem("addData");
        if (savedData) {
            setDataArray(JSON.parse(savedData));
        }
    }, []);

    // add new contact
    const save = (event) => {
        event.preventDefault();
        const addData = {
            name: name.current.value,
            email: email.current.value,
            number: number.current.value,
            address: address.current.value
        };
        const updatedArray = [...dataArray, addData];
        localStorage.setItem("addData", JSON.stringify(updatedArray));
        setDataArray(updatedArray);
        clearForm();
        window.location.reload();
    };

    const clearForm = () => {
        name.current.value = "";
        email.current.value = "";
        number.current.value = "";
        address.current.value = "";
    };

    return (
        <div className="row container">
            <div className="col-md-4 container-fluid">
                <form onSubmit={save}>
                    <div className="well">
                        <span>Add Contact</span>
                        <button style={{ float: "right" }}><span className="glyphicon glyphicon-remove-sign" onClick={() => navigate("/")}></span></button>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" type="text" placeholder="Enter your name" ref={name} required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control" type="email" placeholder="Enter your email" ref={email} required />
                        </div>
                        <div className="form-group">
                            <label>Number:</label>
                            <input className="form-control" type="number" placeholder="Enter your number" ref={number} required />
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input className="form-control" type="text" placeholder="Enter your address" ref={address} required />
                        </div>
                        <div>
                            <input className="btn btn-primary" type="submit" value="Save" />&nbsp;&nbsp;
                            <input className="btn btn-danger" type="reset" value="Reset" onClick={clearForm} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Add_contact;

