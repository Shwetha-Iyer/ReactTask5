import { useContext } from "react";
import {Link} from "react-router-dom";
import UserContext from "./usercontext";
export default function Userlist() {
  let userlist = useContext(UserContext);
  return (
    <>
      <h1> User List</h1>

        <Link to="/usercreate">Create User</Link>
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Activity</th>
                </tr>
              </thead>
              
              <tbody>
            
                {
                  userlist.userdata.map((obj)=>{
                    return <tr>
                      <td>{obj.firstname}</td>
                      <td>{obj.lastname}</td>
                      <td>{obj.email}</td>
                      <td>{obj.password}</td>
                      <td><Link to="/useredit/1">Edit Item</Link></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
