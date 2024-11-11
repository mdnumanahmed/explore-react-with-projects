import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Meals from "./components/Meals/Meals.jsx";
import MealsByCategory from "./components/Meals/MealsByCategory.jsx";
import ShowDetails from "./components/Meals/ShowDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    children: [
      {
        path: "meals",
        element: <Meals />,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"),
      },
      {
        path: "meal/:id",
        element: <ShowDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
      },
      {
        path: "meals/:categoryId",
        element: <MealsByCategory />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
