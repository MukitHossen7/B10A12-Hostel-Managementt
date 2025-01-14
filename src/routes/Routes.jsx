import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import MealDetails from "../pages/MealDetails/MealDetails";
import MealsPage from "../pages/MealsPage/MealsPage";
import UpcomingMeals from "../pages/UpcomingMeals/UpcomingMeals";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddMeals from "../pages/Dashboard/Admin/AddMeals/AddMeals";
import Statistics from "../pages/Dashboard/Common/Statistics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/meals",
        element: <MealsPage></MealsPage>,
      },
      {
        path: "/upcoming-meals",
        element: <UpcomingMeals></UpcomingMeals>,
      },
      {
        path: "/meal/:id",
        element: <MealDetails></MealDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Statistics></Statistics>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "add-meals",
        element: <AddMeals></AddMeals>,
      },
    ],
  },
]);

export default router;
