import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {

  const cartCtx=useContext(CartContext);

  //Object destructing to pull out the items only
  const {items}=cartCtx;

    /* reduce method which transform array of datat into a single value*/
    const totalItems=items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump:''}`;

  useEffect(() => {
    if(
      items.length===0)
    {
      return;
    }
    setBtnIsHighlighted(true);

    const timer=setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return()=>{
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
