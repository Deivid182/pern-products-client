import { ActionFunctionArgs, redirect } from "react-router-dom"
import { editProduct } from "../services/products-service"

export async function action ({ request, params }: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData())

  let error = ""

  if(Object.values(formData).includes("")) {
    error = "All fields are required"
  }

  if(error) {
    return error
  }

  if(params.id !== undefined) {
    await editProduct(formData, +params.id)
    return redirect("/")
  }

}