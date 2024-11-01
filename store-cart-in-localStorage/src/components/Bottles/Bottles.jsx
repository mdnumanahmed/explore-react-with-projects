import { useEffect } from "react";
import { useState } from "react";

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
    </div>
  );
};

export default Bottles;
