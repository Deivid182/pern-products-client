import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/root-layout"
import ProductsPage from "./pages/products/products"
import NewProductPage from "./pages/products/new-product"
import { action as newProductAction } from "./actions/new-product-action"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "products/new",
        element: <NewProductPage />,
        action: newProductAction,
      }
    ]
  }
])