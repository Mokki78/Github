import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }


  const addQuery = (key, value) => {
    let pathname = window.location.pathname;
  
    let {id} = new useParams(window.location.search);
 
    useParams.set(key, value);
    this.props.history.push({
      pathname: pathname,
      search: ({id})
    }) ;
  };

  return (
    <div>
        
      {posts.map((post, i) => (
            <Button
            className="bg-light text-dark-emphasis "
             key={i}
             onClick={ () => addQuery()}>
        <div>
          <img src={post.imageUrl} height="200px" alt={post.title} />
          <h2>{post.title}</h2>
           <p>Price: {post.price}</p>
          <p>Discounted price: {post.discountedPrice}</p>
         </div>
         <Button 
         onClick={() => ({ type: 'addProduct', payload: post })} className="bg-dark">+ Add to cart</Button>
        </Button>
      ))}
     </div>
  );
}

export default Home;