import {Link} from "react-router-dom";
import { useContext } from "react";
import ProductContext from "./productcontext";
export default function Products(){
  let productlist = useContext(ProductContext);
    return <>
    <h1>Car Product </h1>
    <Link to="/productcreate">Create Product</Link>


    <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Color</th>
                  <th>Model</th>
                  <th>Availability</th>
                  <th>Action</th>
                </tr>
              </thead>
              
              <tbody>
              {
                  productlist.productdata.map((obj)=>{
                    return <tr>
                      <td>{obj.name}</td>
                      <td>{obj.color}</td>
                      <td>{obj.modal}</td>
                      <td>{obj.availability}</td>
                      <td><Link to="/productsedit/1">Edit Item</Link></td>
                    </tr>
                  })
                }
                
            </tbody>
        </table>
    </div>
</div>
</div>
    </>
}