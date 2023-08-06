import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import ProductDetail from "../pages/product-detail/ProductDetail";
import Layout from "../layout/Layout";
import Products from "../pages/products/Products";
import CartPage from "../pages/cartPage/CartPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index:true,
                element: <Homepage />
            },
            {
                path: "product",
                children: [
                    {
                        index:true,
                        element: <Products />
                    },
                    {
                        path: ":id",
                        element: <ProductDetail />
                    },
                    
                ]
            },
            {
                path: "cart",
                element: <CartPage />
              },
            
        ]
    }
])

export default function AppRouter() {
    return <RouterProvider router={router} />
}