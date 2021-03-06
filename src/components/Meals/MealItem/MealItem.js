import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext
 } from "react";
 import CartContext
  from "../../../store/CartContext";
const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  const carCtx=useContext(CartContext);

  const addToCartHandler=amount=>{
    carCtx.addItem({
      name:props.name,
      id:props.id,
      amount:amount,
      description:props.description,
      price:props.price
    })
  }


  return (
    <li  className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm  onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
