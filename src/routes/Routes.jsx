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
import UserProfile from "../pages/Dashboard/User/UserProfile/UserProfile";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile/AdminProfile";
import AllMeals from "../pages/Dashboard/Admin/AllMeals/AllMeals";
import AllReviews from "../pages/Dashboard/Admin/AllReviews/AllReviews";
import ServeMeals from "../pages/Dashboard/Admin/ServeMeals/serveMeals";
import UpComingMeal from "../pages/Dashboard/Admin/UpComingMeal/UpComingMeal";
import RequestedMeals from "../pages/Dashboard/User/RequestedMeals/RequestedMeals";
import MyReviews from "../pages/Dashboard/User/MyReviews/MyReviews";
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory/PaymentHistory";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";
import ViewMeals from "../pages/Dashboard/Admin/ViewMeals/ViewMeals";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";

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
      {
        path: "/checkout/:name",
        element: (
          <PrivateRoutes>
            <CheckoutPage></CheckoutPage>
          </PrivateRoutes>
        ),
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
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Statistics></Statistics>,
      },
      // Admin Route
      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "add-meals",
        element: (
          <AdminRoute>
            <AddMeals></AddMeals>
          </AdminRoute>
        ),
      },
      {
        path: "all-meals",
        element: (
          <AdminRoute>
            <AllMeals></AllMeals>
          </AdminRoute>
        ),
      },
      {
        path: "all-reviews",
        element: (
          <AdminRoute>
            <AllReviews></AllReviews>
          </AdminRoute>
        ),
      },
      {
        path: "serve-meals",
        element: (
          <AdminRoute>
            <ServeMeals></ServeMeals>
          </AdminRoute>
        ),
      },
      {
        path: "coming-meals",
        element: (
          <AdminRoute>
            <UpComingMeal></UpComingMeal>
          </AdminRoute>
        ),
      },
      {
        path: "view-meals/:id",
        element: (
          <AdminRoute>
            <ViewMeals></ViewMeals>,
          </AdminRoute>
        ),
      },
      // User Route
      {
        path: "user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "requested-meals",
        element: <RequestedMeals></RequestedMeals>,
      },
      {
        path: "my-reviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);

export default router;
