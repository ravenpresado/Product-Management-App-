
import { useState, useEffect } from 'react'
import ProductDetails from '../pages/ProductDetails'

function ProductList({
  products,
  cart,
  addToCart,
  selectedCategory,
  setSelectedCategory,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [notification, setNotification] = useState('')
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    if (!notification) return

    setIsLeaving(false)

    const exitTimer = setTimeout(() => {
      setIsLeaving(true)
    }, 5000)

    const removeTimer = setTimeout(() => {
      setNotification('')
      setIsLeaving(false)
    }, 5300)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [notification])

  const handleAddToCart = (product) => {
    addToCart(product)
    setIsLeaving(false)
    setNotification(`${product.name} added to cart!`)
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
      
        <div
  className={`cart-notification ${
    notification && !isLeaving ? 'notification-visible' : ''
  }`}
>
  <span className="notification-check">✓</span>
  <div>
    <strong>Added to Cart!</strong>
    <p>{notification}</p>
  </div>
</div>

      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          addToCart={handleAddToCart}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
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

                  <h3 className="product-name">{product.name}</h3>

                  <p className="product-price">
                    ₱{product.price.toLocaleString('en-PH')}
                  </p>

                  <p
                    className={`product-stock ${
                      product.quantity < 5 ? 'low-stock' : ''
                    }`}
                  >
                    Stock: {product.quantity}

                    {product.quantity < 5 && (
                      <span className="low-stock-label">Low Stock</span>
                    )}
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
                    onClick={() => handleAddToCart(product)}
                    disabled={product.quantity <= 0}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ProductList
