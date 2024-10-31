const RowCountry = ({ country, handleDelete }) => {
  return (
    <>
      <tr className="my-10">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className=" ml-3">
            <div className="mask mask-squircle">
              <img
                className="w-28 h-10 object-fill"
                src={country.flags.png}
                alt={country.name.common}
              />
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{country.name.common}</div>
        </td>
        <th>
          <button
            onClick={() => handleDelete(country.cca3)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default RowCountry;
