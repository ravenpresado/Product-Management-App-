
import products from '../data/products'
import { useState } from 'react'

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      )

      if (existingProduct) {
        if (existingProduct.cartQuantity >= product.quantity) {
          alert('Maximum available stock reached!')
          return currentCart
        }

        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        )
      }

      return [...currentCart, { ...product, cartQuantity: 1 }]
    })
  }

  const categories = [
    'All',
    "Women's Clothing",
    "Men's Clothing",
    'Shoes',
    'Sandals',
    "Men's Accessories",
    "Women's Accessories",
  ]

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        )

  return (
    <>
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <span className="product-category">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <p className="product-price">
                ₱{product.price.toLocaleString('en-PH')}
              </p>

              <p className="product-stock">
                Stock: {product.quantity}
              </p>

              <p className="product-subtotal">
                Subtotal: ₱
                {(product.price * product.quantity).toLocaleString('en-PH')}
              </p>

              <button
                className="view-details-btn"
                onClick={() => setSelectedProduct(product)}
              >
                View Details
              </button>

              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* SHOPPING CART */}
      <div className="cart-section">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p>₱{item.price.toLocaleString('en-PH')} each</p>
                </div>

                <div className="cart-quantity">
                  <button
                    onClick={() =>
                      setCart((currentCart) =>
                        currentCart
                          .map((cartItem) =>
                            cartItem.id === item.id
                              ? {
                                  ...cartItem,
                                  cartQuantity: cartItem.cartQuantity - 1,
                                }
                              : cartItem
                          )
                          .filter(
                            (cartItem) => cartItem.cartQuantity > 0
                          )
                      )
                    }
                  >
                    -
                  </button>

                  <span>{item.cartQuantity}</span>

                  <button
                    disabled={item.cartQuantity >= item.quantity}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>

                <strong>
                  ₱
                  {(item.price * item.cartQuantity).toLocaleString('en-PH')}
                </strong>
              </div>
            ))}

            <h3 className="cart-total">
              Total: ₱
              {cart
                .reduce(
                  (total, item) =>
                    total + item.price * item.cartQuantity,
                  0
                )
                .toLocaleString('en-PH')}
            </h3>
          </>
        )}
      </div>

      {/* PRODUCT DETAILS POPUP */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="product-modal">
            <button
              className="close-modal-btn"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <div className="modal-product-info">
              <span className="product-category">
                {selectedProduct.category}
              </span>

              <h2>{selectedProduct.name}</h2>

              <p>{selectedProduct.description}</p>

              <h3>
                ₱{selectedProduct.price.toLocaleString('en-PH')}
              </h3>

              <p>Available Stock: {selectedProduct.quantity}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductList
