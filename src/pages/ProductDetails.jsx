function ProductDetails({ product, addToCart, onBack }) {
  if (!product) {
    return null
  }

  return (
    <div className="product-details-page">
      <button className="back-to-products-btn" onClick={onBack}>
        ← Back to Products
      </button>

      <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <span className="product-category">{product.category}</span>

          <h1>{product.name}</h1>

          <h2 className="product-details-price">
            ₱{product.price.toLocaleString('en-PH')}
          </h2>

          <p className="product-details-description">
            {product.description}
          </p>

          <p className="product-details-stock">
            Available Stock: {product.quantity}
          </p>

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
            disabled={product.quantity <= 0}
          >
            {product.quantity <= 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails