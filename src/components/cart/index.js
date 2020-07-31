import React from "react";
import { ProductConsumer } from "../../contexts/context";
import Title from "../Title";
import CartEmpty from "./CartEmpty";
import Carthead from "./Carthead";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
const Cart = () => {
  return (
    <div>
      <ProductConsumer>
        {(val) => {
          console.log(val.cart.length);
          if (val.cart.length > 0) {
            return (
              <div>
                <Title title="your" span="cart" />
                <Carthead />
                {val.cart &&
                  val.cart.map((item) => {
                    return <CartItem key={item.id} item={item} val={val} />;
                  })}

                <CartTotal val={val} />
              </div>
            );
          } else {
            return <CartEmpty />;
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default Cart;
