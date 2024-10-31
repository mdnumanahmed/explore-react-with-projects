import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import VisitedCountries from "../VisitedCountries/VisitedCountries";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    loadCountries();
  }, []);

  const handleVisited = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleDelete = (id) => {
    const remaining = visitedCountries.filter((country) => country.cca3 !== id);
    setVisitedCountries(remaining);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-10">
        Available Countires : {countries.length}{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-60/40 gap-10">
        <div className="grow-0 md:grow border-2 rounded-xl">
          <h3>Display Available Countries</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-3">
            {countries.map((country) => (
              <Country
                key={country.cca3}
                handleVisited={handleVisited}
                country={country}
              />
            ))}
          </div>
        </div>
        <div className="border-2 rounded-xl">
          <h3>Display Visited Country</h3>
          <div>
            <VisitedCountries
              visitedCountries={visitedCountries}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
