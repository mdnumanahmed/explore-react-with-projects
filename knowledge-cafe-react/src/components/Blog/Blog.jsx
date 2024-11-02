import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
  const {
    cover,
    title,
    author_name,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full" src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3>{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>{reading_time} min read </div>
      </div>
      <h2>{title}</h2>
      <div>
        {hashtags.map((item, idx) => (
          <a key={idx} href="#">
            {item}
          </a>
        ))}
      </div>
      <button>Mark As Read</button>
      <hr className="my-6" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
