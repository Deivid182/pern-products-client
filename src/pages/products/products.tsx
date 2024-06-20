import { Link } from "react-router-dom"
const ProductsPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">
          Products
        </h2>
        <Link
          to="products/new"
          className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
        >
          Create
        </Link>
      </div>
    </div>
  )
}

export default ProductsPage