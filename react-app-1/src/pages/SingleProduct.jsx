import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { StoreContext } from "../context/StoreContext";

export function SingleProduct() {
  const { addToCart, cartItems } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  let { id } = useParams();

 const cartItemAmount = cartItems[id];

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
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  const handleAddToCart = () => {
    if (data && data.id) {
      addToCart(data.id);
    }
  };

  if (isLoading || !data.id) {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
        </div>
      </>
    );


  
  }

  if (isError) {
    return <div>Error</div>;
  }


  return (
    <>
 
  
      <div className="d-flex flex-column align-items-center">
        <li key={data.id}>
          <img src={data.imageUrl} height="400px" alt={data.title} />
          <h1 className="display-5">{data.title}</h1>
  
          {data.discountedPrice < data.price ? (
            <>
              <span className="original-price">NOK {data.price}</span>
              <br />
              <span className="discounted-price">
                NOW ONLY {data.discountedPrice},-
              </span>
              <br />
              <br />
              <span className="discount-percent">
                {Math.round(
                  ((data.price - data.discountedPrice) / data.price) * 100
                )}
                % off
              </span>
            </>
          ) : (
            <span className="regular-price">NOK {data.price},-</span>
          )}
          <p className="lead fw-bolder">
            Rating {data.rating && data.rating}
            <i className="fa fa-star"></i>
          </p>
          <h5 className="p-3">{data.description}</h5>
          <div>
            <button className="addToCartBtn bg-dark" onClick={() => handleAddToCart(id)}>
              Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
          </div>
         
        </li>
      </div>
      <div>
        <h3>Reviews</h3>
        {data.reviews.length === 0 ? (
          <p>No reviews available for this product.</p>
        ) : (
          <ul>
            {data.reviews.map((review) => (
              <li key={review.id}>
                <h4>{review.username}</h4>
                <p>Rating: {review.rating}</p>
                <p>{review.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
 }
 
export default SingleProduct;