import PropTypes from "prop-types";
import MealFilterLink from "./MealFilterLink";

const MealFilterNav = ({ categories }) => {
  // console.log(categories);
  return (
    <div className="container mx-auto text-center">
      <ul className="flex gap-3">
        {categories.map((category) => (
          <MealFilterLink key={category.idCategory} category={category} />
        ))}
      </ul>
    </div>
  );
};

MealFilterNav.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default MealFilterNav;
