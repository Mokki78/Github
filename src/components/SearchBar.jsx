import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Form } from "react-bootstrap";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const SEARCH_URI = "https://api.noroff.dev/api/v1/online-shop/";

export const Search = () => {
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState([]);

  const letsNavigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${SEARCH_URI}?q=${searchQuery}`);
        if (response.ok) {
          const products = await response.json();
          setFilteredProducts(products);
        } else {
          console.error("Failed to fetch products:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [searchQuery]);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const handleSelection = (selected) => {
    if (selected.length > 0) {
      const selectedProduct = filteredProducts.find(
        (product) => product.title === selected[0]
      );
      letsNavigate(`/singleproduct/${selectedProduct.id}`);
    }
  };

  const searchOptions = filteredProducts.map((product) => product.title);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mb-5"></div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : (
          <Container className="d-flex align-items-center">
            <Row>
              <Form
                className="search d-flex col-12"
                onSubmit={(e) => e.preventDefault()}
              >
                <Typeahead
                  id="product-search"
                  options={searchOptions}
                  selected={selectedOption}
                  onChange={handleSelection}
                  placeholder="Search products..."
                  className="me-2"
                  icon="prime:search"
                  height="30px"
                />
              </Form>
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Search;
