/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const CustomLink = ({ item }) => {
  return (
    <li className="list-none ">
      <NavLink
        to={`/${item.name}`}
        className=" rounded-md hover:bg-amber-200 px-3 py-2"
      >
        {item.name}
      </NavLink>
    </li>
  );
};

export default CustomLink;
