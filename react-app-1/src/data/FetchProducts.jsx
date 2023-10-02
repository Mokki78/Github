import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";


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
            setFilter( await response.json());
            setLoading(false);
            console.log(filter)
        }

        return ()=> {
            componentMounted = true;
        }
    }
        
        getProducts()
}, [])

const Loading = () => {
    return (
        <>
        Loading...
        </>
    )
}

const ShowProducts = () => {
    return (
        <>
    <div className="buttons">
        <Button>All </Button>
        <Button>Clothes</Button>
        <Button>Electronics</Button>
        <Button>Womens clothing</Button>
        <Button>Clothes</Button>
        <Button>Mens clothing</Button>
        
    </div>
    {filter.map((Product) => {
        return (
            <>
             <div>
            <div className="col-md-3">
                <div className="card">
                    <img src={Product.imgUrl} alt="product"></img>
                    <h1>{Product.title}</h1>
                    <p>{Product.price}</p>
                 </div >
                 <div className="row">
                     {loading ? <Loading /> : <ShowProducts />}
                 </div>
              </div>
            </div>
            </>
        )

    })}
    </>
    )
}

}

export default Products;