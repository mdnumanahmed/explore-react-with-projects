const Country = ({ country, handleVisited }) => {
  return (
    <div className={`bg-gray-100 p-3 rounded-md space-y-2 `}>
      <img
        className="w-48 h-24 object-fill rounded-md"
        src={country.flags.png}
        alt=""
      />
      <h4 className="text-xl font-bold">{country.name.common} </h4>
      <button
        onClick={() => handleVisited(country)}
        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white transform duration-200 ring-2 hover:ring-offset-2"
      >
        Visited
      </button>
    </div>
  );
};

export default Country;
