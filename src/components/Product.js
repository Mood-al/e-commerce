import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { ProductConsumer } from "../contexts/context";
class Product extends React.Component {
  render() {
    const { img, title, price, inCart, id } = this.props.product;
    // const { val } = this.props.val;
    // console.log(val);
    return (
      <div className="col-md-6 col-lg-3 col-10 mx-auto my-4">
        <div className="card">
          <ProductConsumer>
            {(val) => {
              return (
                <div
                  className="img-container p-5"
                  // onClick={() => val.handleDetails(id)}
                >
                  <Link to={`/details/${id}`}>
                    <img src={img} alt="" className="card-img-top" />
                  </Link>
                  <button
                    className="btn btn-info cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      val.addToCart(id);
                      val.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p disabled className="lead mb-0">
                        in card
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus  "></i>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>

          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <p>{title}</p>
              <h4 className="text-info text-italic">
                <span className="">$</span>
                {price}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
