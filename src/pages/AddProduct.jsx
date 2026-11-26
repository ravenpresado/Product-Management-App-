
import { useState } from 'react'

function AddProduct({ onAddProduct, onCancel }) {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    category: '',
    description: '',
    specification: '',
    rating: '',
    price: '',
    quantity: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProduct = {
      ...formData,
      id: Date.now(),
      rating: Number(formData.rating),
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    }

    onAddProduct(newProduct)
  }

  return (
    <div className="add-product-page">
      <h1>Add New Product</h1>
      <p>Fill in the information below to add a product to your inventory.</p>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>Feature Image URL</label>
        <input
          type="url"
          name="image"
          placeholder="Enter product image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <label>Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Product Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Women's Clothing">Women's Clothing</option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Shoes">Shoes</option>
          <option value="Sandals">Sandals</option>
          <option value="Men's Accessories">Men's Accessories</option>
          <option value="Women's Accessories">Women's Accessories</option>
        </select>

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Enter product description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Product Specification</label>
        <textarea
          name="specification"
          placeholder="Enter product specifications"
          value={formData.specification}
          onChange={handleChange}
          required
        />

        <label>Rating (1–5)</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          step="0.1"
          placeholder="Enter rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        <label>Price (₱)</label>
        <input
          type="number"
          name="price"
          min="0.01"
          step="0.01"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          min="0"
          step="1"
          placeholder="Enter quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit" className="add-to-cart-btn">
          Add Product
        </button>

        <button
          type="button"
          className="back-to-products-btn"
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default AddProduct
