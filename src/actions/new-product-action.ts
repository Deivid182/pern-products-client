import { ActionFunctionArgs, redirect } from "react-router-dom"
import { addProduct } from "../services/products-service"
export async function action({ request }: ActionFunctionArgs) {

  const formData = Object.fromEntries(await request.formData())

  let error = ""

  if(Object.values(formData).includes("")) {
    error = "All fields are required"
  }

  if(error) {
    return error
  }

  await addProduct(formData)

  return redirect("/")
}