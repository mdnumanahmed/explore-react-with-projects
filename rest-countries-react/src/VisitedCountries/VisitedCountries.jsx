import RowCountry from "./RowCountry";

const VisitedCountries = ({ visitedCountries, handleDelete }) => {
  return (
    <div>
      <div className="overflow-x-auto p-4">
        <table className="w-full">
          {/* head */}
          <thead>
            <tr className="space-x-4">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Flag</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {/* row 1 */}

            {visitedCountries.map((country, idx) => (
              <RowCountry
                key={idx}
                handleDelete={handleDelete}
                country={country}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VisitedCountries;
