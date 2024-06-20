import { Link, useLoaderData } from "react-router-dom";
import { Product } from "../../types";
import ProductDetails from "../../components/products/product-details";
const ProductsPage = () => {
  const products = useLoaderData() as Product[];

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Products</h2>
        <Link
          to="products/new"
          className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
        >
          Create
        </Link>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg">
        {
          products.length > 0 ? (

            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    Available
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((item) => (
                    <ProductDetails item={item} key={item.id} />
                  ))
                }
              </tbody>
            </table>
          ) : (
            <p className="text-center font-light text-2xl text-slate-700 ">
              There's no products to show
            </p>
          )
        }
      </div>
    </div>
  );
};

export default ProductsPage;
