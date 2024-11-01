import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import {
  addCartToLS,
  getStoredCart,
  removeFromLS,
} from "../../utilities/utilities";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadBottles = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    loadBottles();
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        savedCart.push(bottle);
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addCartToLS(bottle.id);
  };

  const handleRemoveItem = (id) => {
    // remove from UI
    const remaining = cart.filter((bottle) => bottle.id !== id);
    setCart(remaining);
    // remove from LocalStorage
    removeFromLS(id);
  };

  return (
    <div>
      <h2 className="text-2xl">Available Bottles : {bottles.length} </h2>
      <div className="grid grid-cols-70/30 my-5">
        <div className="grid grid-cols-3 gap-5">
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Cart Data</h2>
          <div>
            <Cart cart={cart} handleRemoveItem={handleRemoveItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottles;
