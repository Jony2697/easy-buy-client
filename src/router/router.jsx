import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'/productDetails/:id',
          loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`),
          Component:ProductDetails
        }
    ]
  },
]);

export default router;