import React from "react";
import {useState} from "react";
let UserContext = React.createContext();
export default UserContext;

export const UserProvider = ({children}) =>{
    let [userdata,setUserdata] = useState([]);
    return <UserContext.Provider value={{userdata,setUserdata}}>
        {children}
    </UserContext.Provider>
}