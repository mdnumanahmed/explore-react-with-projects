import PropTypes from "prop-types";

const Bottle = ({ bottle, handleAddToCart }) => {
  return (
    <div className="space-y-3 bg-gray-100 rounded-md p-3">
      <img src={bottle.img} alt="" />
      <p>{bottle.name} </p>
      <p>Price : ${bottle.price}</p>
      <button
        onClick={() => handleAddToCart(bottle)}
        className="px-4 py-1 bg-slate-300 rounded-xl"
      >
        Add to Cart
      </button>
    </div>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle;
