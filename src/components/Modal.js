import React, { Component } from "react";
import "./Modal.css";
import { ProductConsumer } from "../contexts/context";
import { Link } from "react-router-dom";
export default class Modal extends Component {
  state = {
    closeModal: false,
  };
  closeModalFunc = (e) => {
    console.log(e.target);
    if (
      e.target.classList.contains("row") ||
      e.target.classList.contains("modal-container")
    ) {
      this.setState({ closeModal: true });
    }
  };
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const { img, title, price } = val.modalProduct;
          if (!val.modalOpen) {
            return null;
          } else {
            return (
              <div
                className="modal-container"
                onClick={(e) => {
                  this.closeModalFunc(e);
                  val.closeModal(this.state.closeModal);
                }}
              >
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6 mx-auto lg-4 col-8 text-center modal-content">
                      <div id="modal" className="p-5">
                        <img src={`/${img}`} alt="" className="img-fluid" />
                        <h4 className="text-info">{title}</h4>
                        <p>
                          price : <span>$</span>
                          {price}
                        </p>
                        <div className="btn-container mx-auto text-center">
                          <Link to="/">
                            <button
                              className="btn btn-info mr-4 mt-4"
                              onClick={() => {
                                val.closeModal(true);
                              }}
                            >
                              go back to store
                            </button>
                          </Link>
                          <Link to="/cart">
                            <button
                              className="btn btn-warning mt-4"
                              onClick={() => {
                                val.closeModal(true);
                              }}
                            >
                              go to cart
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
