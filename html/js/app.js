let productList = []

const tbody = document.getElementById('productTableBody')
const productForm = document.getElementById('productForm')
const formError = document.getElementById('formError')

function formatPrice(value) {
  return new Intl.NumberFormat('vi-VN').format(value) + ' đ'
}

function statusBadge(status) {
  if (status === 'Còn hàng') {
    return '<span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Còn hàng</span>'
  }
  return '<span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">Hết hàng</span>'
}

function renderProducts() {
  if (productList.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="py-6 text-center text-gray-400">Chưa có sản phẩm.</td></tr>'
    return
  }

  tbody.innerHTML = productList.map(function (p, index) {
    return (
      '<tr class="border-b border-gray-100">' +
      '<td class="py-3.5 px-3">' + (index + 1) + '</td>' +
      '<td class="py-3.5 px-3">' + p.name + '</td>' +
      '<td class="py-3.5 px-3">' + p.category + '</td>' +
      '<td class="py-3.5 px-3">' + formatPrice(p.price) + '</td>' +
      '<td class="py-3.5 px-3">' + statusBadge(p.status) + '</td>' +
      '</tr>'
    )
  }).join('')
}

function loadData() {
  productList = products.slice()
  renderProducts()
}

productForm.querySelectorAll('input, select').forEach(function (el) {
  el.addEventListener('input', function () {
    if (productForm.checkValidity()) formError.classList.add('hidden')
  })
  el.addEventListener('change', function () {
    if (productForm.checkValidity()) formError.classList.add('hidden')
  })
})

function resetForm() {
  productForm.reset()
  document.getElementById('category').value = ''
  document.getElementById('status').value = 'Còn hàng'
  formError.classList.add('hidden')
}

document.getElementById('btnReset').addEventListener('click', resetForm)

productForm.addEventListener('submit', function (e) {
  e.preventDefault()

  if (!productForm.checkValidity()) {
    formError.classList.remove('hidden')
    productForm.reportValidity()
    return
  }

  formError.classList.add('hidden')

  productList.push({
    id: Date.now(),
    name: document.getElementById('productName').value,
    category: document.getElementById('category').value,
    price: Number(document.getElementById('price').value),
    status: document.getElementById('status').value,
  })

  renderProducts()
  resetForm()
})

loadData()
