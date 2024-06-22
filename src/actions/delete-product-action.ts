import { ActionFunctionArgs, redirect } from "react-router-dom"
import { deleteProduct } from "../services/products-service"
export async function action({ params }: ActionFunctionArgs) {

  if(params.id) {
    await deleteProduct(+params.id)
    return redirect("/")
  }
}