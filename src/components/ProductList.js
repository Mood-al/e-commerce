import React from "react";
import Title from "../components/Title";
import { ProductConsumer } from "../contexts/context";
import Product from "../components/Product";
const ProductList = () => {
  return (
    <div className="container">
      <Title title="our" span="products" />
      <div className="row">
        <ProductConsumer>
          {(val) => {
            return (
              val &&
              val.products.map((product) => {
                return <Product key={product.id} product={product} />;
              })
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default ProductList;
