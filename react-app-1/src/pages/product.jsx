import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";



export function Product() {
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

    getData(`https://api.noroff.dev/api/v1/online-shop/`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

    return (
    <div>
      <h1>id: {data.title}</h1>
      <p>title: {data.description}</p>
      <img src={data.imageUrl} height="200px" width="100%" alt={data.title} />
         <div>body: {data.image}</div>

    </div>
  );
}