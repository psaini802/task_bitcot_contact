import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact_view() {
    const [dataArr, setArr] = useState([]);
    const searchRef = useRef()
    const navigate = useNavigate()
    const viewFun = (inde) => {
        dataArr.map((data, index) => {
            if (inde == index) {
                localStorage.setItem("viewdata", JSON.stringify(data))
            }
        })
        navigate("/viewcontact")
    }
    //edit function
    const editFun = (inde) => {
        dataArr.map((data, index) => {
            if (inde == index) {
                localStorage.setItem("editdata", JSON.stringify(data))
                localStorage.setItem("editdataindex", JSON.stringify(index))
            }
        })
        navigate("/editcontact")
    }
    //delete function
    const deleteFun = (inde) => {
        var copyarr = [...dataArr]
        copyarr.splice(inde, 1)
        setArr(copyarr)
        localStorage.setItem("addData", JSON.stringify(copyarr))
    }

    //search function
    const searchContacts = (event) => {
        event.preventDefault();
        const searchTerm = searchRef.current.value.trim().toLowerCase();
        if (!searchTerm) {
            const savedData = JSON.parse(localStorage.getItem("addData"));
            if (savedData) {
                setArr(savedData);
            }
            return;
        }

        const filteredResults = dataArr.filter((data) =>
            data.name.toLowerCase().includes(searchTerm)
        );
        setArr(filteredResults);
    };
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("addData"));
        if (savedData) {
            setArr(savedData);
        }
    }, []);

    return (
        <div className="row">
            <div className="col-md-4">
                <nav className="navbar bg-primary ">
                    <span className="navbar-brand text-center">All Contacts <button onClick={() => { navigate("/addcontact") }}><span className="glyphicon glyphicon-plus-sign"></span></button></span>
                </nav>
                <div className="text-center">
                    <div className="form-group col-md-6 offset-md-3">
                        <input type="text" className="form-control text-center" name="search" id="phone" placeholder="Search" ref={searchRef} onKeyUp={searchContacts} />
                    </div>
                </div>

                <div>
                    <table className="table">
                        <tbody>
                            {dataArr.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>

                                        <td><span className="glyphicon glyphicon-user" style={{ fontSize: "30px", marginRight: "5px" }}></span>
                                            {data.name}<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.number}</td>
                                        <td>
                                            <button onClick={() => viewFun(index)}><span className="glyphicon glyphicon-eye-open"></span></button>&nbsp;
                                            <button onClick={() => deleteFun(index)}> <span className="glyphicon glyphicon-trash"></span></button>&nbsp;
                                            <button onClick={() => editFun(index)}><span class="glyphicon glyphicon-pencil"></span></button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contact_view;
