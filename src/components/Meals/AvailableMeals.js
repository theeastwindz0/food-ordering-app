import React,{useEffect,useState} from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";



const AvailableMeals = () => {
  
  const [meals,setMeals]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(() => {

    const fetchMeals=async()=>
    {
     const response=await fetch('https://react-main-81fce-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
     const responseData=await response.json();

     console.log(responseData)
     const loadedMeals=[];

     for(const key in responseData)
     {
       loadedMeals.push({
         id:key,
         name:responseData[key].name,
         description:responseData[key].description,
         price:responseData[key].price
       })
     }
     setMeals(loadedMeals)
     setIsLoading(false);

    }
    fetchMeals();
  }, [])
  
  if(isLoading)
  {
    return(
      <section className={classes.loadingMeals}>
        Loading...
      </section>
    )
  }
  
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
