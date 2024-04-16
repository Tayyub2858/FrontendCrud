import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/getUser/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

            <div className="container">

                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>User Details</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>
                            <h2>The User name is : <b>{empdata.name}</b>  ({empdata._id})</h2>
                            <h3>Contact Details</h3>
                            <h5>Email is : {empdata.email}</h5>
                            <h5>Address is : {empdata.address}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;