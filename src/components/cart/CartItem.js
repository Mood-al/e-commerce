import React from "react";

function CartItem({ item, val }) {
  console.log(item, val);
  return (
    <div className="container-fluid">
      <div className="row text-center  d-flex justify-content-center align-items-center">
        <div className="col-10 mx-auto col-lg-2  mt-4">
          <img
            src={`/${item.img}`}
            style={{ width: "4rem", height: "4rem" }}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2 mt-4 ">
          <h6>{item.title}</h6>
        </div>
        <div className="col-10 mx-auto col-lg-2 mt-4">
          <h4>{item.price} $</h4>
        </div>
        <div className="col-10 mx-auto col-lg-2 mt-4">
          <span
            className="btn btn-outline-danger mr-2"
            onClick={() => val.decreament(item.id)}
          >
            -
          </span>
          <span className="btn btn-outline-danger mr-2">{item.count}</span>
          <span
            className="btn btn-outline-danger"
            onClick={() => val.increament(item.id)}
          >
            +
          </span>
        </div>
        <div className="col-10 mx-auto col-lg-2 mt-4">
          <span
            className="btn btn-outline-warning "
            onClick={() => val.removeItem(item.id)}
          >
            <i className="fas fa-trash  "></i>
          </span>
        </div>
        <div className="col-10 mx-auto col-lg-2 mt-4">
          total <span>{item.total}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
