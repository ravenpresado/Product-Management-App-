
import { useState } from 'react'
import Products from '../pages/Products'
import productsData from '../data/products'
import AddProduct from '../pages/AddProduct'

function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [productList, setProductList] = useState(productsData)

  const handleAddProduct = (newProduct) => {
    setProductList((currentProducts) => [...currentProducts, newProduct])
    setActivePage('products')
    setSelectedCategory('All')
  }

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

  const cartItemCount = cart.reduce(
    (total, item) => total + item.cartQuantity,
    0
  )

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  )

  return (
    <div className="dashboard-layout">
      <header className="top-header">
        <h2 className="sidebar-logo">ProductHub</h2>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activePage === 'addProduct' ? 'active' : ''}`}
            onClick={() => setActivePage('addProduct')}
          >
            + Add Product
          </button>

          <button
            className={`nav-item ${activePage === 'products' ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory('All')
              setActivePage('products')
            }}
          >
            Products
          </button>

          <button
            className={`nav-item ${activePage === 'categories' ? 'active' : ''}`}
            onClick={() => setActivePage('categories')}
          >
            Categories
          </button>

          <button
            className={`nav-item ${activePage === 'cart' ? 'active' : ''}`}
            onClick={() => setActivePage('cart')}
          >
            Cart ({cartItemCount})
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activePage === 'dashboard' && (
          <>
            <header className="dashboard-header">
              <h1>Dashboard</h1>
              <p>Welcome to your Product Management System</p>
            </header>

            <section className="dashboard-content">
              <h2>Overview</h2>

              <div className="summary-cards">
                <div className="summary-card blue">
                  <h3>Total Products</h3>
                  <p className="summary-number">12</p>
                  <span>Products in inventory</span>
                </div>

                <div className="summary-card purple">
                  <h3>Categories</h3>
                  <p className="summary-number">4</p>
                  <span>Product categories</span>
                </div>

                <div className="summary-card green">
                  <h3>Cart Items</h3>
                  <p className="summary-number">{cartItemCount}</p>
                  <span>Items currently in cart</span>
                </div>

                <div className="summary-card orange">
                  <h3>Inventory Value</h3>
                  <p className="summary-number">₱25,450</p>
                  <span>Total inventory worth</span>
                </div>
              </div>
            </section>
          </>
        )}

        {activePage === 'addProduct' && (
          <AddProduct
            onAddProduct={handleAddProduct}
            onCancel={() => setActivePage('products')}
          />
        )}

        {activePage === 'products' && (
          <Products
            products={productList}
            cart={cart}
            addToCart={addToCart}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {activePage === 'categories' && (
          <section className="dashboard-content">
            <h1>Categories</h1>
            <p>Browse your products by category.</p>

            <div className="categories-grid">
              {[
                "Women's Clothing",
                "Men's Clothing",
                'Shoes',
                'Sandals',
                "Men's Accessories",
                "Women's Accessories"
              ].map((category) => (
                <button
                  key={category}
                  className="category-card"
                  onClick={() => {
                    setSelectedCategory(category)
                    setActivePage('products')
                  }}
                >
                  <h3>{category}</h3>
                  <span>View Products →</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {activePage === 'cart' && (
          <section className="cart-section">
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <p>{item.category}</p>
                      <p>₱{item.price.toLocaleString('en-PH')} each</p>

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
                                .filter((cartItem) => cartItem.cartQuantity > 0)
                            )
                          }
                        >
                          −
                        </button>

                        <span>{item.cartQuantity}</span>

                        <button
                          disabled={item.cartQuantity >= item.quantity}
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <strong>
                      ₱{(item.price * item.cartQuantity).toLocaleString('en-PH')}
                    </strong>
                  </div>
                ))}

                <h2 className="cart-total">
                  Total: ₱{cartTotal.toLocaleString('en-PH')}
                </h2>
              </>
            )}
          </section>
        )}
      </main>
    </div>
  )
}

export default Dashboard
