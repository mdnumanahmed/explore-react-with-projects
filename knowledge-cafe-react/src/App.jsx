import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmars/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  const handleReadTime = (time, id) => {
    // check blog already bookmarked or not
    // without bookmark, can not add read time
    if (bookmark.find((item) => item.id === id)) {
      const newReadTime = readTime + time;
      setReadTime(newReadTime);
      const remaining = bookmark.filter((item) => item.id !== id);
      setBookmark(remaining);
    }
  };

  return (
    <>
      <header className="container mx-auto">
        <Header />
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-[66%_33%] gap-6 mt-8">
          <div>
            <Blogs
              handleBookmark={handleBookmark}
              handleReadTime={handleReadTime}
              bookmarks={bookmark}
            />
          </div>
          <div>
            <Bookmarks bookmarks={bookmark} readTime={readTime} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
