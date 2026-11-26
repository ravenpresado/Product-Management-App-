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
          <p>Your product dashboard will appear here.</p>
        </section>
      </main>
    </div>
  )
}

export default Dashboard