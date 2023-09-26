import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

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

  return (
    <div>
      {posts.map((post,i) => (
            <Button
            key={i}
              onClick={(e) => {
                
              }}>
        <div>
          <h2>{post.title}</h2>
          <img src={post.imageUrl} height="200px" alt={post.title} />
          <p>{post.description}</p>
          <p>Price: {post.discountedPrice}</p>
          <p>Discounter price: {post.discountedPrice}</p>
          <p>Rating: {post.rating}</p>
        </div>
        </Button>
      ))}
     </div>
  );
}

export default Home;