import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AddEquipments from "../pages/AddEquipments";
import UpdateEquipments from "../pages/UpdateEquipments";
import MyEquipmentList from "../pages/MyEquipmentList";

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
        path: "/update-equipments/:id",
        element: <UpdateEquipments />,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`).then((res)=>res.json()),
      },
      {
        path: "/my-equipment-list",
        element: <MyEquipmentList />,
      },
    ],
  },
]);

export default routes;
