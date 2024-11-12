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
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
    element: <Home />,
    children: [
      {
        path: "meals",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"),
        element: <Meals />,
      },
      {
        path: "meal/:id",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
        element: <ShowDetails />,
      },
      {
        path: "meals/:categoryId",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryId}`
          ),
        element: <MealsByCategory />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
