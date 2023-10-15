import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import * as ButtonStyle from "../styled.components/Button.style";

export const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.noroff.dev/api/v1/online-shop/"
      );
      if (componentMounted) {
        const products = await response.json();
        setData(products);
        setFilteredProducts(products);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const letsNavigate = useNavigate();

  const ShowProducts = () => {
    return (
      <>
        <Container className="d-flex align-items-center">
          <Row>
            {filteredProducts.map((product) => {
              return (
                <ButtonStyle.Button
                  onClick={() => letsNavigate(`/singleproduct/${product.id}`)}
                  className="col-md-3 mg-5 p-3"
                  key={product.id}
                >
                  <div className="card h-100 text-center p-4">
                    <img
                      src={product.imageUrl}
                      height="250px"
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        {product.discountedPrice < product.price ? (
                          <>
                            <span className="original-price">
                              NOK {product.price}
                            </span>
                            <br />
                            <span className="discounted-price">
                              NOW ONLY {product.discountedPrice},-
                            </span>
                            <br />
                            <br />
                            <span className="discount-percent bg-danger">
                              {Math.round(
                                ((product.price - product.discountedPrice) /
                                  product.price) *
                                  100
                              )}
                              % off
                            </span>
                          </>
                        ) : (
                          <span className="regular-price">
                            NOK {product.price},-
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </ButtonStyle.Button>
              );
            })}
          </Row>
        </Container>
      </>
    );
  };

  return (
    <div className="container my-3 py-1">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
