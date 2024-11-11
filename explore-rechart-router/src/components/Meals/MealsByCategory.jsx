import { useLoaderData } from "react-router-dom";
import MealByCategory from "./MealByCategory";

const MealsByCategory = () => {
  const { meals } = useLoaderData();
  console.log(meals);
  return (
    <div>
      <h3>Available Meals:{meals.length}</h3>
      <div className="grid grid-cols-4 gap-8">
        {meals.map((meal) => (
          <MealByCategory key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsByCategory;
