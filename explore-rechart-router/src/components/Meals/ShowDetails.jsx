import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const { meal } = useLoaderData();
  console.log(meal);
  return (
    <div>
      <img src={meal?.strMealThumb} alt="" />
      <h3>{meal?.strMeal}</h3>
    </div>
  );
};

export default ShowDetails;
