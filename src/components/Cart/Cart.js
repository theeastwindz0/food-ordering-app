import classes from "./Cart.module.css";
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1})
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          /* Pre configruing a function arguments when it is receiving */
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
