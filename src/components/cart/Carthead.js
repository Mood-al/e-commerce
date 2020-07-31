import React from "react";

function Carthead() {
  return (
    <div className="container-fluid d-none d-lg-block">
      <div className="row text-center ">
        <div className="col-10 col-lg-2 mx-auto ">
          <h5>product</h5>
        </div>
        <div className="col-10 col-lg-2 mx-auto ">
          <h5>product name</h5>
        </div>
        <div className="col-10 col-lg-2 mx-auto ">
          <h5>product price</h5>
        </div>
        <div className="col-10 col-lg-2 mx-auto ">
          <h5>amount</h5>
        </div>
        <div className="col-10 col-lg-2 mx-auto ">
          <h5>remove</h5>
        </div>
        <div className="col-10 col-lg-2 mx-auto ">
          <h5>total</h5>
        </div>
      </div>
    </div>
  );
}

export default Carthead;
