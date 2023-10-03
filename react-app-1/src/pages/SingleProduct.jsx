import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



 export function SingleProduct() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <>
    <div className="d-flex flex-column align-items-center">
    
      <img src={data.imageUrl} height="500px" alt={data.title}></img>
      <h1 className="display-5">{data.title}</h1>
      <h5 className="p-3">{data.description}</h5>
      <p className="display-7 fw-bold my-4">NOK {data.price},-</p>
      <p className="lead fw-bolder">Rating {data.rating && data.rating.rate}<i className="fa fa-star"></i></p>
      <div>
     <button className="btn btn-outline-dark">+ Add to cart</button>
   </div>
   </div>
   
   </>
  
  );
}

export default SingleProduct;