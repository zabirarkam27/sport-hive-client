import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AddEquipments from "../pages/AddEquipments";
import UpdateEquipments from "../pages/UpdateEquipments";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/add-equipments",
        element: <AddEquipments />,
      },
      {
        path: "/update-equipments",
        element: <UpdateEquipments />,
      },
    ],
  },
]);

export default routes;
