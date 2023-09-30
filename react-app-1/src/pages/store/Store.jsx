import React from "react";
import { PRODUCTS } from "./Products";
import { Product} from "./Product";


export const Store = ()  => {
    return (
        <div classname="store">
        <div className="storeTitle">
            <h1>Mokkis e-com store</h1>
        </div>
        <div className="products"> 
        {" "}
        {PRODUCTS.map((product) => (
            <Product data={product}/>
        
          ))}
        </div>
       </div>
    )
}

        

