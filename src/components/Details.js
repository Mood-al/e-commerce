import React from "react";
import { ProductConsumer } from "../contexts/context";
import { Link } from "react-router-dom";
const Details = (props) => {
  return (
    <div className="container">
      <ProductConsumer>
        {(val) => {
          const id = parseInt(props.match.params.id);

          const product = val && val.products.find((item) => item.id === id);
          if (product) {
            const { img, title, price, company, info, inCart } = product;
            return (
              <div>
                <div className="row mt-5">
                  <div className="col-10 col-md-6 mx-auto ">
                    <img src={`/${img}`} alt="" className="img-fluid" />
                  </div>
                  <div className="col-10 col-md-6 mx-auto my-4 text-center">
                    <h3>Name : {title}</h3>
                    <h5 className="text-warning">made by: {company}</h5>
                    <h2 className="text-danger">
                      price:
                      <span> $</span>
                      <strong>{price}</strong>
                    </h2>
                    <p className="mt-3">{info}</p>
                    <Link to="/">
                      <button className="btn btn-info px-5 ml-4 mt-4 mt-lg-0">
                        back to products
                      </button>
                    </Link>
                    <button
                      className="btn btn-warning ml-4 mt-4 mt-lg-0 px-5"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        val.addToCart(id);
                        val.openModal(id);
                      }}
                    >
                      {inCart ? "added to cart" : "add to card"}
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default Details;
