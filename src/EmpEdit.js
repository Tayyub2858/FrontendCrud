import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EmpEdit = () => {
    const { empid } = useParams();
    console.log(empid)
    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:5000/getUser/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp._id);
            namechange(resp.name);
            emailchange(resp.email);
            addresschange(resp.address);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[address,addresschange]=useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,name,email,address};
      

      fetch("http://localhost:5000/userUpdate/"+ empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        Swal.fire({
            icon: "success",
            title: "Update user successfully",
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container">

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>User Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input value={address} onChange={e=>addresschange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                               
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" onClick={handlesubmit}>Update</button>
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
     );
}
 
export default EmpEdit;