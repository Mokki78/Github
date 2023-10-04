import React from "react";
import { Products } from "../../data/FetchProducts";



export const Store = ()  => {
    return (
        <div className="store">
        <div className="storeTitle"></div>
      <div className="container"> 
       
         <Products />
         
         </div>
      </div>
    )
}

        

