import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";


export const Products = () => {

    const [ data, setData] = useState([]);
    const [filter, setFilter ] = useState(data);
    const [ loading, setLoading ] = useState(false);
  
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://api.noroff.dev/api/v1/online-shop/")
        if(componentMounted) {
            setData(await response.clone().json())
            setFilter(await response.json());
            setLoading(false);
          console.log(filter)
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

const filterProducts = (cat ) => {
    const updatedList = data.filter((x) =>x.category === cat)
    setFilter(updatedList)
}

const letsNavigate = useNavigate()

const ShowProducts = () => {
    return (
        <>
    <div className="buttons d-flex justify-content-center mb-5 pb-4">
        <button className="btn btn-outline-dark" onClick={() =>setFilter(data)}>All</button>
        <button className="btn btn-outline-dark" onClick={() =>filterProducts("electronics")}>Electronics</button>
        <button className="btn btn-outline-dark" onClick={() =>filterProducts("cosmetics")}>Cosmetics</button>
        <button className="btn btn-outline-dark" onClick={() =>filterProducts("toy")}>Toys</button>
        <button className="btn btn-outline-dark" onClick={() =>filterProducts("clothes")}>Clothes</button>
        <button className="btn btn-outline-dark" onClick={() =>filterProducts("jewelry")}>Jewelry</button>

    </div>
    {filter.map((product)=> {
        return(
            <>
            <div className="col-md-3 mg-5 p-3">
                <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.imageUrl} height="250px" alt={product.title}></img>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">NOK {product.price},-</p>
                    </div>
                    <button onClick={() => letsNavigate(`/singleproduct/${product.id}`)} className="btn btn-outline-dark">+ Buy now</button>
                 </div>
            </div>
            </>
        )
    })}
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
                    {loading ? <Loading />  : <ShowProducts />}
                </div>
            </div>
           
        )


   
    
}




export default Products;