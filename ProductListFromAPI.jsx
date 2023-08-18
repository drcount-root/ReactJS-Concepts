import { useState, useEffect, useRef } from "react";

const ProductList = () => {
  const [products, setProduucts] = useState([]);

  let rendered = useRef(false);

  const fetchApiData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setProduucts((prev) => [...prev, data.products]);
  };

  useEffect(() => {
    if (!rendered.current) {
      fetchApiData();
    }

    return () => {
      rendered.current = true;
    };
  }, []);

  return (
    <>
      <div>{JSON.stringify(products)}</div>
    </>
  );
};

export default ProductList;
