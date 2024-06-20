import { safeParse } from "valibot"
import axios from "axios"
import { DraftProductSchema } from "../types"
type ProductData = {
  [key: string]: FormDataEntryValue
}

const url = `${import.meta.env.VITE_SERVER_URL}/api/products`

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    })
    // console.log(result)
    if(result.success) {
      const { data } = await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
        available: true
      })
      console.log(data)
    } else {
      throw new Error("Invalid data")
    }
  } catch (error) {
    console.log(error)
  }
}