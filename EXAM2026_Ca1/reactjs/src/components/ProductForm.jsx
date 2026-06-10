import { useRef, useState } from 'react'

const inputClass =
  'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

const defaultForm = {
  productName: '',
  category: '',
  price: '',
  status: 'Còn hàng',
}

const categoryOptions = [
  'Điện thoại',
  'Máy tính bảng',
  'Phụ kiện',
  'Laptop',
  'Tai nghe',
]

export default function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState(defaultForm)
  const [showError, setShowError] = useState(false)
  const formRef = useRef(null)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(function (prev) {
      return { ...prev, [name]: value }
    })
    setShowError(false)
  }

  function resetForm() {
    setFormData(defaultForm)
    setShowError(false)
    if (formRef.current) formRef.current.reset()
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target

    if (!form.checkValidity()) {
      setShowError(true)
      form.reportValidity()
      return
    }

    setShowError(false)

    onAdd({
      id: Date.now(),
      name: formData.productName,
      category: formData.category,
      price: Number(formData.price),
      status: formData.status,
    })

    resetForm()
  }

  return (
    <section className="p-7 border-b lg:border-b-0 lg:border-r border-gray-200">
      <h2 className="text-base font-bold text-gray-900">Thêm sản phẩm mới</h2>
      <p className="text-xs text-gray-500 mt-1 mb-5">
        Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.
      </p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3.5">
          <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Nhập tên sản phẩm"
            value={formData.productName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="mb-3.5">
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Danh mục
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">-- Chọn danh mục --</option>
            {categoryOptions.map(function (item) {
              return <option key={item}>{item}</option>
            })}
          </select>
        </div>

        <div className="mb-3.5">
          <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Giá
          </label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            placeholder="Nhập giá"
            value={formData.price}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="mb-3.5">
          <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Trạng thái còn hàng
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="Còn hàng">Còn hàng</option>
            <option value="Hết hàng">Hết hàng</option>
          </select>
        </div>

        {showError && (
          <p className="text-red-600 text-xs mt-1">Vui lòng điền đầy đủ các trường bắt buộc.</p>
        )}

        <div className="flex gap-2.5 mt-5">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg"
          >
            Thêm sản phẩm
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-white border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-lg"
          >
            Làm mới form
          </button>
        </div>
      </form>
    </section>
  )
}
