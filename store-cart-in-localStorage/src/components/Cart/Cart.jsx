import PropTypes from "prop-types";
const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <>
      <h3 className="text-xl">Currently in Cart : {cart.length} Products </h3>
      <div className="flex justify-around">
        <h3>Image</h3>
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <div>
        {cart.map((bottle) => (
          <div
            key={bottle.id}
            className="flex justify-around items-center my-3"
          >
            <img className="w-14" src={bottle.img} alt="" />
            <h3>{bottle.name}</h3>
            <button
              onClick={() => handleRemoveItem(bottle.id)}
              className="px-2 py-0 rounded-full bg-slate-200"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};
export default Cart;
