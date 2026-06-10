import ProductRow from './ProductRow.jsx'

export default function ProductTable({ products }) {
  return (
    <section className="p-7">
      <h2 className="text-base font-bold text-gray-900">Danh sách sản phẩm</h2>
      <p className="text-xs text-gray-500 mt-1 mb-5">
        Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.
      </p>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs font-bold text-gray-500 uppercase tracking-wide border-b border-gray-200">
            <th className="text-left py-2.5 px-3">STT</th>
            <th className="text-left py-2.5 px-3">Tên sản phẩm</th>
            <th className="text-left py-2.5 px-3">Danh mục</th>
            <th className="text-left py-2.5 px-3">Giá</th>
            <th className="text-left py-2.5 px-3">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-6 text-center text-gray-400">
                Chưa có sản phẩm.
              </td>
            </tr>
          ) : (
            products.map(function (product, index) {
              return (
                <ProductRow
                  key={product.id}
                  index={index}
                  product={product}
                />
              )
            })
          )}
        </tbody>
      </table>
    </section>
  )
}
