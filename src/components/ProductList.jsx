import products from '../data/products'

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />

          <div className="product-info">
            <span className="product-category">{product.category}</span>
            <h3>{product.name}</h3>

            <p className="product-price">
              ₱{product.price.toLocaleString('en-PH')}
            </p>

            <p className="product-stock">
              Stock: {product.quantity}
            </p>

            <p className="product-subtotal">
              Subtotal: ₱{(product.price * product.quantity).toLocaleString('en-PH')}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList