import Header from './components/Header.jsx'
import ProductForm from './components/ProductForm.jsx'
import ProductTable from './components/ProductTable.jsx'
import useProducts from './hooks/useProducts.js'
import { products as initialProducts } from './data/data.js'

export default function App() {
  const { productList, addProduct } = useProducts(initialProducts)

  return (
    <div className="bg-slate-100 min-h-screen py-8 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr]">
            <ProductForm onAdd={addProduct} />
            <ProductTable products={productList} />
          </div>
        </div>
      </div>
    </div>
  )
}
