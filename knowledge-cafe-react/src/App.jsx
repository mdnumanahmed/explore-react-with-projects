import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmars/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Header />
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-[66%_33%]">
          <div>
            <Blogs />
          </div>
          <div>
            <Bookmarks />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
