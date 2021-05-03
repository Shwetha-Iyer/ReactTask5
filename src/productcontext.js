import React from "react";
import {useState} from "react";
let ProductContext = React.createContext();
export default ProductContext;

export const ProductProvider = ({children}) =>{
    let [productdata,setProductdata] = useState([]);
    return <ProductContext.Provider value={{productdata,setProductdata}}>
        {children}
    </ProductContext.Provider>
}