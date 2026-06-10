export default function ProductStatusBadge({ status }) {
  const isInStock = status === 'Còn hàng'

  return (
    <span
      className={
        'inline-block px-3 py-1 rounded-full text-xs font-semibold ' +
        (isInStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')
      }
    >
      {status}
    </span>
  )
}
