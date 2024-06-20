import { Link, Form, useActionData } from "react-router-dom";
import ErrorMessage from "../../components/ui/error-message";
const NewProductPage = () => {

  const error = useActionData() as string

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">
          Register a new Product
        </h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
        >
          Go back
        </Link>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="max-w-lg mx-auto" method="post" action="">
        <div className="mb-5">
          <label
            htmlFor="product-name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="example: Apple"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="product-price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Price
          </label>
          <input
            type="number"
            id="product-price"
            name="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default NewProductPage;
