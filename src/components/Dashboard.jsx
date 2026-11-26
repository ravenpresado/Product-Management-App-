function Dashboard() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-logo">ProductHub</h2>

        <nav className="sidebar-nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Products</button>
          <button className="nav-item">Categories</button>
          <button className="nav-item">Cart</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome to your Product Management System</p>
          </div>
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
      <p className="summary-number">0</p>
      <span>Items currently in cart</span>
    </div>

    <div className="summary-card orange">
      <h3>Inventory Value</h3>
      <p className="summary-number">₱25,450</p>
      <span>Total inventory worth</span>
    </div>
  </div>
</section>
      </main>
    </div>
  )
}

export default Dashboard