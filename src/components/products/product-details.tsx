import { Form, useFetcher, useNavigate } from "react-router-dom";
import type { Product } from "../../types";
import { formatCurrency } from "../../helpers";
type Props = {
  item: Product;
};

const ProductDetails: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  const fetcher = useFetcher()

  return (
    <tr className="border-b border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
      >
        {item.name}
      </th>
      <td className="px-6 py-4">{formatCurrency(item.price)}</td>
      <td className="px-6 py-4 bg-gray-50">
        <fetcher.Form method="POST">
          <button
            type="submit"
            name="id"
            value={item.id.toString()}
            className={`bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${item.available ? 'text-slate-800' : 'text-red-600'}`}
          >
            {item.available ? "In Stock" : "Out of stock"}
          </button>
        </fetcher.Form>
      </td>
      <td className="px-6 py-4 flex items-center gap-5">
        <button
          onClick={() => navigate(`products/${item.id}/edit`)}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Edit
        </button>
        <Form
          method="POST"
          action={`/products/${item.id}/delete`}
          onSubmit={(e) => {
            if (!window.confirm("Are you sure?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default ProductDetails;
