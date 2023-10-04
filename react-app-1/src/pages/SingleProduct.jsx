import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";




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
    return (
      <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6">
        <Skeleton height={50}  width={300}/>
        <Skeleton height={75} />
        <Skeleton height={25}  width={150}/>
        <Skeleton height={50} />
        <Skeleton height={150} />
      </div>
      </>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <>
    <div className="d-flex flex-column align-items-center">
     <img src={data.imageUrl} height="400px" alt={data.title}></img>
     <h1 className="display-5">{data.title}</h1>
  
      <p className="display-7 fw-bold my-4">NOK {data.price},-</p>
      <p className="lead fw-bolder">Rating {data.rating && data.rating.rate}<i className="fa fa-star"></i></p>
      <h5 className="p-3">{data.description}</h5>
      <div>
     <button className="btn btn-outline-dark ms-2 pb-2">+ Add to Cart</button>
   </div>
   <div>
     <NavLink to="/shoppingcart" className="btn btn-outline-dark ms-2 pt-2">Go to Cart</NavLink>
   </div>
   </div>
   
   </>
  
  );
}

export default SingleProduct;