import { ActionFunctionArgs } from "react-router-dom"
import { updateProductAvailable } from "../services/products-service"

export async function action ({ request }: ActionFunctionArgs) {

  const data = Object.fromEntries(await request.formData())
  await updateProductAvailable(+data.id)
  return {}
}