import classes from "./Cart.module.css";
import React from "react";

const cartItems = <ul className={classes['cart-items']}>{ [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
  (item) => <li>{item.name}</li>
)}</ul>;
const Cart = () => {
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
      </div>
      <div>
          <button className={classes['button--alt']}>
              Close
          </button>
          <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
