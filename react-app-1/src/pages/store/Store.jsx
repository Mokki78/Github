import React from "react";
import { Products} from "../../data/FetchProducts";
import { Search} from "../../components/SearchBar";


export const Store = ()  => {
    return (
        <div className="store">
        <div className="storeTitle"></div>
      <div className="container"> 
          <Search />
         <Products />
     
       
         </div>
      </div>
    )
}

        

