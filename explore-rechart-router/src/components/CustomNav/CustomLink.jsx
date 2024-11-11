/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const CustomLink = ({ item }) => {
  return (
    <li className="list-none ">
      <NavLink
        to={`/meals/${item.strCategory.toLowerCase()}`}
        className=" rounded-md hover:bg-amber-200 px-3 py-2"
      >
        {item.strCategory}
      </NavLink>
    </li>
  );
};

export default CustomLink;
