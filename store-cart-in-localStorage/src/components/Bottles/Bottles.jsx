import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    const loadBottles = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    loadBottles();
  }, []);
  return (
    <div>
      <h2 className="text-2xl">Available Bottles : {bottles.length} </h2>
      <div className="grid grid-cols-70/30">
        <div className="grid grid-cols-3 gap-5">
          {bottles.map((bottle) => (
            <Bottle key={bottle.id} bottle={bottle} />
          ))}
        </div>
        <div>Cart Data</div>
      </div>
    </div>
  );
};

export default Bottles;
