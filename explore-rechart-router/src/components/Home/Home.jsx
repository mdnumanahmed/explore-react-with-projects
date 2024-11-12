import { Outlet, useLoaderData } from "react-router-dom";
import CustomNav from "../CustomNav/CustomNav";
import MealFilterNav from "../Meals/MealFilterNav";

const Home = () => {
  const { categories } = useLoaderData();
  return (
    <div>
      <CustomNav />
      <MealFilterNav categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
