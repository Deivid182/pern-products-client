import { getProducts } from "../services/products-service"

export async function loader () {
  const products = await getProducts()
  return products
}