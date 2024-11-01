import PropTypes from "prop-types";

const Bottle = ({ bottle }) => {
  console.log(bottle);
  return (
    <div className="space-y-3 bg-gray-100 rounded-md p-3">
      <img src={bottle.img} alt="" />
      <p>Name: {bottle.name} </p>
      <p>Price : ${bottle.price}</p>
      <button className="px-4 py-1 bg-slate-300 rounded-xl">Add to Cart</button>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
};

export default Bottle;
