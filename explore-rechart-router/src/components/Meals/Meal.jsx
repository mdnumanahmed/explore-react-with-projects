import PropTypes from "prop-types";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb, strArea, strCategory } = meal;
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
      <p>{strArea && strArea}</p>
      <p>{strCategory && strCategory}</p>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Meal;
