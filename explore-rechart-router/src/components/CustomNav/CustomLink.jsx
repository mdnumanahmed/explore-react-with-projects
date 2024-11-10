/* eslint-disable react/prop-types */

const CustomLink = ({ item }) => {
  return (
    <li className="list-none ">
      <a href={item.path} className=" rounded-md hover:bg-amber-200 px-3 py-2">
        {item.name}
      </a>
    </li>
  );
};

export default CustomLink;
