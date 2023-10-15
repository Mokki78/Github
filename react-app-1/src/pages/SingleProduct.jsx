import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { StoreContext } from "../context/StoreContext";
import { Row, Col, Container } from "react-bootstrap";
import { Loader } from "../components/Spinner";

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
        <div className="d-flex justify-content-center align-items-center">
          <Loader />
        </div>
        ;
      </>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Container style={{ border: "1px solid black" }} className="mt-5 mb-5">
        <Row>
          <Col className="col-10-md d-flex flex-column align-items-center  pt-5 pb-md-5">
            <img
              src={data.imageUrl}
              className="img-fluid"
              alt={data.title}
              maxWidth="150px"
              style={{ minWidth: "150px" }}
            />
          </Col>
          <Col className="col-10-md d-flex flex-column align-items-center pt-2 pb-md-5 m-5 bg-white">
            <h1 className="display-5">{data.title}</h1>
            <h5 className="p-3">{data.description}</h5>
            <span className="discount-percent bg-danger">
              {Math.round(
                ((data.price - data.discountedPrice) / data.price) * 100
              )}
              % off
            </span>

            {data.discountedPrice < data.price ? (
              <>
                <span className="original-price">
                  Original price {data.price}
                </span>
                <br />
                <span className="discounted-price">
                  <strong>Now only {data.discountedPrice},-</strong>
                </span>
                <br />
                <br />
              </>
            ) : (
              <span className="regular-price">NOK {data.price},-</span>
            )}

            <div className="p-4">
              <button
                className="btn btn-outline-dark"
                onClick={() => handleAddToCart(id)}
              >
                Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
            </div>

            <h5 className="pt-4">Reviews :</h5>
            {data.reviews.length === 0 ? (
              <p>No reviews available for this product.</p>
            ) : (
              <div className="bg-light">
                {data.reviews.map((review) => (
                  <div key={review.id} className="p-3">
                    <h5>{review.username}</h5>
                    <p>{review.description}</p>
                    <p>
                      Rating {data.rating && data.rating}
                      <i className="fa fa-star"></i>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProduct;
