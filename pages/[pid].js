import React from "react";
import path from "path";
import fs from "fs/promises";
const ProductDetailPage = (props) => {
  const { products } = props;
  //    if(!products){
  //        return <p>Loading...</p>
  //    }
  return (
    <div>
      <h1>{products.title}</h1>
      <h2>{products.description}</h2>
    </div>
  );
};

const getProducts = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    return jsonString;
  });
  const data = JSON.parse(jsonData);
  return data;
};
export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.pid;
  const data = await getProducts();
  const productData = data.products.find((product) => product.id === productId);
  return {
    props: {
      products: productData,
    },
  };
};
export const getStaticPaths = async () => {
  const data = await getProducts();
  const productsIds = data.products.map((product) => {
    return { params: { pid: product.id } };
  });

  return {
    paths: productsIds,
    // fallback: true,
    fallback: false,
  };
};
export default ProductDetailPage;
