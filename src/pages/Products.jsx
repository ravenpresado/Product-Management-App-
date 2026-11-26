import ProductList from '../components/ProductList'

function Products() {
  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1>Products</h1>
          <p>Browse and manage your fashion collection.</p>
        </div>
        <span className="product-count">{/* Product count will be added later */}</span>
      </div>

      <ProductList />
    </div>
  )
}

export default Products