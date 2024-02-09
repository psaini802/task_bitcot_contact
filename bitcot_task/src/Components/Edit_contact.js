import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit_contact() {
    const name = useRef();
    const email = useRef();
    const number = useRef();
    const address = useRef();
    const navigate = useNavigate();


    //update contact
    const update = (event) => {
        event.preventDefault();
        var obj = {
            name: name.current.value,
            email: email.current.value,
            number: number.current.value,
            address: address.current.value
        };
        const savedData = JSON.parse(localStorage.getItem("addData"));
        const copy = [...savedData];
        const index = JSON.parse(localStorage.getItem("editdataindex"));
        copy.splice(index, 1, obj);
        localStorage.setItem("addData", JSON.stringify(copy));
        navigate("/");
        window.location.reload();
    };

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("editdata"));
        if (savedData) {
            name.current.value = savedData.name;
            email.current.value = savedData.email;
            number.current.value = savedData.number;
            address.current.value = savedData.address;
        }
    }, []);

    const resetForm = () => {
        name.current.value = "";
        email.current.value = "";
        number.current.value = "";
        address.current.value = "";
    };

    return (
        <div className="row container">
            <div className="col-md-4 container-fluid">
                <form onSubmit={update}>
                    <div className="well">
                        <span>Edit Contact</span>
                        <button type="button" style={{ float: "right" }} className="btn btn-danger" onClick={() => navigate("/")}>
                            <span className="glyphicon glyphicon-remove-sign"></span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Name:</label>
                            <input className="form-control" type="text" placeholder="Enter your name" ref={name} />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control" type="email" placeholder="Enter your email" ref={email} />
                        </div>
                        <div className="form-group">
                            <label>Number:</label>
                            <input className="form-control" type="number" placeholder="Enter your number" ref={number} />
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input className="form-control" type="text" placeholder="Enter your address" ref={address} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger" onClick={resetForm}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit_contact;
