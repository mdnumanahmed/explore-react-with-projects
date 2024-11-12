import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const { meals } = useLoaderData();
  // console.log(meals);
  // const { id } = useParams();
  // console.log(id);
  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <img src={meal?.strMealThumb} alt="" />
          <h3>{meal?.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default ShowDetails;
