import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";




export const Products = () => {

    const [ data, setData] = useState([]);
    const [ loading, setLoading ] = useState(false);
   
   
  
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://api.noroff.dev/api/v1/online-shop/")
        if(componentMounted) {
          const products = await response.json();
            setData(products);
          
            setLoading(false);
        
        }

        return () => {
            componentMounted = false;
        } 
        
    }
     getProducts();
}, []);

const Loading = () => {
    return (
        <>
        Loading..
        </>
    )
}



const letsNavigate = useNavigate()


const ShowProducts = () => {
    return (
        <>
  
        return(
            <>
        <button onClick={() => letsNavigate(`/singleproduct/${data.id}`)} className="col-md-3 mg-5 p-3">
  <div className="card h-100 text-center p-4" key={data.id}>
    <img src={data.imageUrl} height="250px" alt={data.title} />
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">
      
        {data.discountedPrice < data.price ? (
          <>
           <span className="original-price">NOK {data.price}</span>
           <br />
         
            <span className="discounted-price">
              NOW ONLY {data.discountedPrice},-
            </span>
            <br />
            <br />
            <span className="discount-percent bg-danger text">
              {Math.round(((data.price - data.discountedPrice) / dats.price) * 100)}% off
            </span>
          </>
        ) : (
       
          <span className="regular-price">NOK {product.price},-</span>
        )}
      </p>
    </div>
  </div>
</button>
   </>
        )
  
 
    </>
    )
   
}
     return (
            <div className="container my-3 py-1">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />

                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading />  : <ShowProducts/>}
                </div>
            </div>
           
        )


   
    
}


export default Products;