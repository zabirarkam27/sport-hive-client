import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AddEquipments from "../pages/AddEquipments";
import UpdateEquipments from "../pages/UpdateEquipments";
import MyEquipmentList from "../pages/MyEquipmentList";
import Login from "../pages/Login";
import Register from './../pages/Register';
import PrivateRoutes from "./PrivateRoutes";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import ViewDetails from "../pages/ViewDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/products?limit=6"),
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/add-equipments",
        element: (
          <PrivateRoutes>
            <AddEquipments />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-equipments/:id",
        element: (
          <PrivateRoutes>
            <UpdateEquipments />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/my-equipment-list",
        element: (
          <PrivateRoutes>
            <MyEquipmentList />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
