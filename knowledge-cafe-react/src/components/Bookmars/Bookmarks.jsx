import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div>
      <div className="bg-[#6047EC1A] rounded-lg text-center py-5">
        <h3 className="text-2xl font-bold text-[#6047EC]">
          Total Read Time :{readTime}
        </h3>
      </div>
      <div className="bg-[#1111110D] mt-6 p-7 rounded-lg">
        <h3 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark, idx) => (
          <h3
            key={idx}
            className="text-xl font-semibold p-5 bg-white rounded-lg my-3"
          >
            {bookmark.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Bookmarks;
