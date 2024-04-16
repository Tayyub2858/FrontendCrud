import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Admin() {

    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [validation, valchange] = useState(false);
    const [validationemail, emailvalication] = useState(false);


    const navigate = useNavigate();

    const HandleLogin = (e) => {
        e.preventDefault();
        const empdata = { password, email};


        if(email === "admin@gmail.com" && password === "admin"){
            alert("login Successfully")
            navigate('/dashbaord')
        }
        else{
            alert("please Enter the correct information")
        }
    
        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json"    },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container"  style={{ marginTop: "50px" }}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="" style={{ textAlign: "center" }}>
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">



                                   

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onMouseDown={e => emailvalication(true)} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                            {email.length == 0 && validationemail && <span className="text-danger">Enter the Email</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Passowrd</label>
                                            <input required value={password} onMouseDown={e => valchange(true)} onChange={e => passwordchange(e.target.value)} className="form-control"></input>
                                            {password.length == 0 && validation && <span className="text-danger">Enter the password</span>}
                                        </div>
                                    </div>



                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success"onClick={HandleLogin} >Login</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Admin
