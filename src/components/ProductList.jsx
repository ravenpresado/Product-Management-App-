import products from '../data/products'
import { useState } from 'react'
import ProductDetails from '../pages/ProductDetails'

function ProductList({ cart, addToCart, selectedCategory, setSelectedCategory }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

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
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          addToCart={addToCart}
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