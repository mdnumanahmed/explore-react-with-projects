import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookmark, handleReadTime, bookmarks }) => {
  const {
    id,
    cover,
    title,
    author_name,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="space-y-3">
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3>{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xl">
          <span>{reading_time} min read</span>{" "}
          <CiBookmark
            onClick={() => handleBookmark(blog)}
            className="cursor-pointer text-2xl"
          />
        </div>
      </div>
      <h2>{title}</h2>
      <div>
        {hashtags.map((item, idx) => (
          <a key={idx} href="#">
            {item}
          </a>
        ))}
      </div>
      <button
        disabled={!bookmarks.length}
        onClick={() => handleReadTime(reading_time, id)}
      >
        Mark As Read
      </button>
      <hr className="py-6" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
};
export default Blog;
