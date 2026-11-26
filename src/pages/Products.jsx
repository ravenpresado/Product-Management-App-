
import ProductList from '../components/ProductList'

function Products({ cart, addToCart }) {
  return (
    <div className="products-page">
      <div className="products-header">
        <div>
          <h1>Products</h1>
          <p>Browse and manage your fashion collection.</p>
        </div>
        <span className="product-count">
          {cart.reduce((total, item) => total + item.cartQuantity, 0)} items in cart
        </span>
      </div>

      <ProductList cart={cart} addToCart={addToCart} />
    </div>
  )
}

export default Products
