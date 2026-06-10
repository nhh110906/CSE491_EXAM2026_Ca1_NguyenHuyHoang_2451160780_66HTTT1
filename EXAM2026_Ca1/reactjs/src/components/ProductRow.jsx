import { formatPrice } from '../utils/formatPrice.js'
import ProductStatusBadge from './ProductStatusBadge.jsx'

export default function ProductRow({ index, product }) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-3.5 px-3">{index + 1}</td>
      <td className="py-3.5 px-3">{product.name}</td>
      <td className="py-3.5 px-3">{product.category}</td>
      <td className="py-3.5 px-3">{formatPrice(product.price)}</td>
      <td className="py-3.5 px-3">
        <ProductStatusBadge status={product.status} />
      </td>
    </tr>
  )
}
