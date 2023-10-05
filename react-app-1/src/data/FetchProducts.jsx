import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";




export const Products = () => {

    const [ data, setData] = useState([]);
    const [filter, setFilter ] = useState(data);
    const [ loading, setLoading ] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
   
  
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://api.noroff.dev/api/v1/online-shop/")
        if(componentMounted) {
            setData(await response.clone().json())
            setFilter(await response.json());
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

const filteredProducts = filter.filter((product) =>
  product.title.toLowerCase().includes(searchQuery.toLowerCase())
);

useEffect(() => {
    console.log("searchQuery:", searchQuery);
    console.log("data:", data);
    console.log("filteredProducts:", filteredProducts);
  }, [searchQuery,filteredProducts, data]);


const letsNavigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
} 

const ShowProducts = () => {
    return (
        <>
        <Container className="d-flex align-items-center  my-3 py-1">
            <Row>
                <Col className="col-md-12">
        <Form className="search" onSubmit={handleSubmit}>
        <Form.Control
  type="text"
  className="display-6" 
  placeholder="Search products..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  
        />
        <Button>Search</Button>
        </Form>
        </Col>
        </Row>
        </Container>
     {filteredProducts.map((product)=> {
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
                    {loading ? <Loading />  : <ShowProducts/>}
                </div>
            </div>
           
        )


   
    
}


export default Products;