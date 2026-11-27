
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

  if (
    !formData.image.trim() ||
    !formData.name.trim() ||
    !formData.category ||
    !formData.description.trim() ||
    !formData.specification.trim() ||
    formData.rating === '' ||
    formData.price === '' ||
    formData.quantity === ''
  ) {
    alert('Please fill in all fields.')
    return
  }

  if (
    Number(formData.rating) < 1 ||
    Number(formData.rating) > 5 ||
    Number(formData.price) <= 0 ||
    Number(formData.quantity) < 0 ||
    !Number.isInteger(Number(formData.quantity))
  ) {
    alert('Please enter valid rating, price, and quantity values.')
    return
  }

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
      <div className="add-product-heading">
        <h1 className="page-title">Add New Product</h1>
        <p>Enter the product information to add it to your inventory.</p>
      </div>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Feature Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="Enter product image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Specification</label>
          <textarea
            name="specification"
            placeholder="Enter product specifications"
            value={formData.specification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-actions">
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
        </div>
      </form>
    </div>
  )
}

export default AddProduct
