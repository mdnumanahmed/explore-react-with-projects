import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const MealByCategory = ({ meal }) => {
  //   const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { strMeal, strMealThumb, strArea, strCategory } = meal;
  //   const handleShowDetails = () => {
  //     navigate(`/meal/${meal.idMeal}`);
  //   };
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
      <p>{strArea && strArea}</p>
      <p>{strCategory && strCategory}</p>
      <Link to={`/meal/${id}`}>
        <button className="px-4 py-2 bg-orange-300">Show Details</button>
      </Link>
    </div>
  );
};

MealByCategory.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default MealByCategory;
