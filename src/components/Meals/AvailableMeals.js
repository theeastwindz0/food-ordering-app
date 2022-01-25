import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Finger Chips",
    description: "French Fries deeply fried twice",
    price: 135,
  },
  {
    id: "m2",
    name: "Veg Spring Rolls",
    description: "Spring roll wrappers,cabbage,soy sauce",
    price: 220,
  },
  {
    id: "m3",
    name: "Hara Bhara Kabab",
    description: "Potatoes, green peas, garam masala powder, gram flour",
    price: 175,
  },
  {
    id: "m4",
    name: "Crispy Veg",
    description: "Mixed veg tossed in honey sauce",
    price: 275,
  },
  {
    id: "m5",
    name: "Crispy Potato",
    description: "French fries tossed in honey sauce",
    price: 245,
  },
  {
    id: "m6",
    name: "Chilli Mushroom",
    description: "Whole wheat flour, red bell peppers,  ",
    price: 365,
  },
  {
    id: "m7",
    name: "Stir Fried Mushroom",
    description: "crisp batter fried mushrooms",
    price: 365,
  },
  {
    id: "m8",
    name: "Paneer Tikka ",
    description: "Grilled tandoori paneer with capsicum and tomatoes",
    price: 375,
  },
  {
    id: "m9",
    name: "Chilli Paneer",
    description: "Batter fried cottage cheese tossed with green chilli and pepper",
    price: 375,
  },
  {
    id: "m10",
    name: "Chilli Chicken",
    description: "Batter fried boneless chicken tossed with chilli and bell pepper",
    price: 419,
  },
  {
    id: "m11",
    name: "Garlic Chicken",
    description: "Stripped chicken in garlic sauce",
    price: 419,
  },
  {
    id: "m12",
    name: "Laila Majnu Kabab",
    description: "Double coated chicken and mutton with Indian spices",
    price: 440,
  },
  {
    id: "m13",
    name: "Betu Maggi",
    description: "Exclusive product made with love",
    price: 999,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
