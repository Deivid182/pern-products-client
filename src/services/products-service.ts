import { safeParse } from "valibot"
import axios from "axios"
import { toBoolean } from "../helpers"
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from "../types"
type ProductData = {
  [key: string]: FormDataEntryValue
}

const url = `${import.meta.env.VITE_SERVER_URL}/api`

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    })
    // console.log(result)
    if(result.success) {
      await axios.post(`${url}/products`, {
        name: result.output.name,
        price: result.output.price,
        available: true
      })
    } else {
      throw new Error("Invalid data")
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getProducts() {
  try {
    const { data } = await axios(`${url}/products`)
    const products = safeParse(ProductsSchema, data.data)
    if(products.success) {
      return products.output
    } else {
      throw new Error("Something went wrong")
    }
  } catch (error) {
    console.log(error)
  }
}

export async function getProductById(id: Product['id']) {
  try {
    const { data } = await axios(`${url}/products/${id}`)
    const product = safeParse(ProductSchema, data.data)
    if(product.success) {
      return product.output
    } else {
      throw new Error("Something went wrong")
    }
  } catch (error) {
    console.log(error)
  }
}

export async function editProduct(data: ProductData, id: Product['id']) {
  try {
    const result = safeParse(ProductSchema, {
      id,
      name: data.name,
      price: +data.price,
      available: toBoolean(data.available.toString())
    })
    if(result.success) {
      await axios.patch(`${url}/products/${id}`, result.output)
    } else {
      throw new Error("Something went wrong")
    }
  } catch (error) {
    console.log(error)
  }
}

export async function deleteProduct(id: Product['id']) {
  try  {
    await axios.delete(`${url}/products/${id}`)
  } catch (error)  {
    console.log(error)
  }
}

export async function updateProductAvailable(id: Product['id']) {

  try {
    await axios.patch(`${url}/products/${id}`)
  } catch (error) {
    console.log(error)
  }
}