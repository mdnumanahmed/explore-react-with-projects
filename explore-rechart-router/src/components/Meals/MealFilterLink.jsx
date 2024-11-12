import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MealFilterLink = ({ category }) => {
  return (
    <li>
      <NavLink
        className="px-4 py-2 bg-slate-100 list-none inline-block"
        to={`/meals/${category.strCategory}`}
      >
        {category.strCategory}
      </NavLink>
    </li>
  );
};

MealFilterLink.propTypes = {
  category: PropTypes.object.isRequired,
};

export default MealFilterLink;
