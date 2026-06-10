import { useState } from 'react'

export default function useProducts(initialProducts) {
  const [productList, setProductList] = useState(initialProducts)

  function addProduct(product) {
    setProductList(function (prev) {
      return prev.concat(product)
    })
  }

  return { productList, addProduct }
}
