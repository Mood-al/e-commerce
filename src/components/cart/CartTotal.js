import React from "react";
import { Link } from "react-router-dom";

function CartTotal({ val }) {
  const { cartSubTotal, cartTax, cartTotal } = val;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 col-md-4 mx-auto mt-4 text-center bg-info rounded text-white m-2">
          <h2 className="ter my-4">cart total</h2>
          <p>
            cart sub total : <span>{cartSubTotal} $</span>
          </p>
          <p>
            cart sub total : <span>{cartTax} $</span>
          </p>
          <p>
            cart sub total : <span>{cartTotal} $</span>
          </p>
          <Link to="/">
            <button
              className="btn btn-warning px-5 mb-4"
              onClick={val.clearCart}
            >
              clear cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
