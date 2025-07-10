import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";


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
          loader:({params})=>fetch(`https://easy-buy-server-omega.vercel.app/products/${params.id}`),
          Component:ProductDetails
        },
        {
          path:'/addedCart',
          Component:Cart
        }

    ]
  },
]);

export default router;