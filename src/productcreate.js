import {useState} from "react";
import{useContext} from "react";
import ProductContext from "./productcontext";
export default function Productcreate() {
    let [name,setname] = useState("");
    let [color,setcolor] = useState("");
    let [modal,setmodal] = useState("");
    let [availability,setavail] = useState("");
    let data = useContext(ProductContext);
    let userSubmit = (e)=>{
        e.preventDefault();
        
        data.setProductdata([...data.productdata,{
            name,
            color,
            modal,
            availability
        }]);
    }
    
  return (
    <>
      <h1> Product Create</h1>

      <p> Create a new product here </p>

      <form onSubmit={userSubmit}> 
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label> Name</label>
              <input className="form-control" value={name} onChange={(e)=>setname(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> Color</label>
              <input className="form-control" value={color} onChange={(e)=>setcolor(e.target.value)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label> Modal</label>
              <input className="form-control" value={modal} onChange={(e)=>setmodal(e.target.value)}/>
            </div>
            <div className="col-lg-6">
              <label> Availability</label>
              <input className="form-control" value={availability} onChange={(e)=>setavail(e.target.value)}/>
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