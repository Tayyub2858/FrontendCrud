import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
   
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/user/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/user/edit/" + id);
    }
    const Removefunction = (id) => {
        // Display SweetAlert2 confirmation dialog
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // If user confirms deletion
            if (result.isConfirmed) {
                // Send DELETE request to server
                fetch("http://localhost:5000/userDelete/" + id, {
                    method: "DELETE"
                }).then((res) => {
                    // Display success message
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    // Reload the page
                    window.location.reload();
                }).catch((err) => {
                    console.log(err.message)
                });
            }
        });
    };
    




    useEffect(() => {
        fetch("http://localhost:5000/getUser").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>User Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="user/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Address</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td><a onClick={() => { LoadEdit(item._id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item._id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item._id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;