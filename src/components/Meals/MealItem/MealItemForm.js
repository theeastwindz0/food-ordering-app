import React,{useRef,useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {

  const amountInputRef=useRef();
  const [amountIsvalid,setAmountIsValid]=useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;

    if(enteredAmount.trim().length===0 || enteredAmountNumber<1 ||enteredAmountNumber>5)
    {
      setAmountIsValid(false);
      return ;
    }

    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form  className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
        label="Quantity"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          id: "amount_" + props.id,
        }}
      />
      <button>+ Add</button>
      {!amountIsvalid && <p>Please a Valid Amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
