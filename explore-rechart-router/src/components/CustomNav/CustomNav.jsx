import { useState } from "react";
import CustomLink from "./CustomLink";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 6,
      name: "Meals",
      path: "/meals",
    },
  ];

  return (
    <div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <IoClose className="text-3xl ml-auto" />
        ) : (
          <CiMenuFries className="text-3xl ml-auto" />
        )}
      </div>
      <div
        className={`${
          open
            ? "absolute md:static w-32 md:w-full top-8 right-0"
            : "absolute md:static w-32 md:w-full -top-96 right-0"
        } text-right md:flex justify-center gap-8 bg-amber-100 py-5 duration-1000`}
      >
        {navItems.map((item) => (
          <CustomLink key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

CustomNav.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CustomNav;
