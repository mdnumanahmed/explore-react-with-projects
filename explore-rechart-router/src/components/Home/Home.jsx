import { Outlet, useLoaderData } from "react-router-dom";
import CustomNav from "../CustomNav/CustomNav";

const Home = () => {
  const { categories } = useLoaderData();
  console.log(categories);
  return (
    <div>
      <CustomNav categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
