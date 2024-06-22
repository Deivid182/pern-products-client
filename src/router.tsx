import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/root-layout"
import ProductsPage from "./pages/products/products"
import NewProductPage from "./pages/products/new-product"
import { action as newProductAction } from "./actions/new-product-action"
import { loader as productsLoader } from "./loaders/products-loader"
import { loader as getProductLoader } from "./loaders/get-product-loader"
import { action as editProductAction } from "./actions/edit-product-action"
import { action as deleteProductAction } from "./actions/delete-product-action"
import { action as updateAvailableAction } from "./actions/update-available-action"
import EditProductPage from "./pages/products/edit-product"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
        loader: productsLoader,
        action: updateAvailableAction
      },
      {
        path: "products/new",
        element: <NewProductPage />,
        action: newProductAction,
      },
      {
        path: "products/:id/edit",
        element: <EditProductPage />,
        loader: getProductLoader,
        action: editProductAction
      },
      {
        path: "products/:id/delete",
        action: deleteProductAction
      },
    ]
  }
])