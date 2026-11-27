
import ProductList from '../components/ProductList'

function Products({
  products,
  cart,
  addToCart,
  selectedCategory,
  setSelectedCategory,
  onDeleteProduct,
}) {
  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p>Browse and manage your fashion collection.</p>
        </div>

        <span className="product-count">
          {cart.reduce((total, item) => total + item.cartQuantity, 0)} items in cart
        </span>
      </div>

      <ProductList
        products={products}
        cart={cart}
        addToCart={addToCart}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onDeleteProduct={onDeleteProduct}
      />
    </div>
  )
}

export default Products
