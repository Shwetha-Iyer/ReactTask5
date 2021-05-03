import {useState} from "react";
import{useContext} from "react";
import UserContext from "./usercontext";
export default function Usercreate() {
    let [firstname,setfirstname] = useState("");
    let [lastname,setlastname] = useState("");
    let [email,setemail] = useState("");
    let [password,setpassword] = useState("");
    let data = useContext(UserContext);
    let userSubmit = (e)=>{
        e.preventDefault();
        data.setUserdata([...data.userdata,{
            firstname,
            lastname,
            email,
            password
        }]);
    }
    
  return (
    <>
      <h1> User Create</h1>

      <p> Create a new user here </p>

      <form onSubmit={userSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> first name</label>
              <input className="form-control" value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> last name</label>
              <input className="form-control" value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> email</label>
              <input className="form-control" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> password</label>
              <input className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </div>
          </div>
          <div className="row mt-3">
          <input type="submit" className="btn btn-primary" value="Submit"/>
          </div>
          
        </div>
      </form>
    </>
  );
}
