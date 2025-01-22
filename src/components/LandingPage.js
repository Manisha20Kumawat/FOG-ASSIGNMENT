import React, { useState } from "react";
import Card from "./Card";
import './LandingPage.css';
import shopImage from '../images/shopimage.png'; 
import product1 from '../images/product1.png'; 
import product2 from '../images/product2.png'; 
import product3 from '../images/product3.png'; 
import product4 from '../images/product4.png'; 

const initialProducts = [
  { name: "Syltherine", price: "2,500,000", image: product1, discount: "3,500,000" },
  { name: "Leviosa", price: "2,000,000", image: product2, discount: "2,500,000" },
  { name: "Chairman", price: "1,200,000", image: product3, discount: "1,800,000" },
  { name: "Comfort Chair", price: "1,800,000", image: product4, discount: "2,200,000" },
  { name: "Breeze", price: "2,100,000", image: product1, discount: "2,400,000" },
  { name: "Elegance", price: "2,600,000", image: product2, discount: "3,000,000" },
  { name: "Majestic", price: "2,800,000", image: product3, discount: "3,200,000" },
  { name: "Opulence", price: "2,300,000", image: product4, discount: "2,700,000" },
  { name: "Explorer", price: "2,400,000", image: product1, discount: "2,900,000" },
  { name: "Voyager", price: "2,700,000", image: product2, discount: "3,100,000" },
  { name: "Recliner", price: "1,900,000", image: product3, discount: "2,200,000" },
  { name: "Ergo", price: "1,500,000", image: product4, discount: "2,000,000" },
  { name: "Zenith", price: "3,000,000", image: product1, discount: "3,500,000" },
  { name: "Vista", price: "2,000,000", image: product2, discount: "2,500,000" },
  { name: "Classic", price: "1,700,000", image: product3, discount: "2,100,000" },
  { name: "Fusion", price: "2,200,000", image: product4, discount: "2,600,000" }
];

const ShopPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortOption, setSortOption] = useState("default");

  // Function to convert price string to a number for sorting
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/,/g, ''), 10);
  };

  // Sorting handler
  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);

    let sortedProducts = [...products];
    if (value === "price-low-high") {
      sortedProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (value === "price-high-low") {
      sortedProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (value === "name-asc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "name-desc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sortedProducts = initialProducts;  // Reset to default
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="shop-page">
      {/* Image with 50% opacity */}
      <div className="image-container">
        <img src={shopImage} alt="Shop" className="shop-image" />
        <div className="overlay">
          <h1 className="shop-heading text-dark">SHOP</h1>
          <div className="breadcrumb">
            <span className="breadcrumb-text text-dark">Home</span>
            <span className="breadcrumb-arrow"> &gt; </span>
            <span className="breadcrumb-text text-dark">Shop</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left Part */}
          <div className="left-part d-flex align-items-center">
            <i className="bi bi-sliders filter-icon"></i>
            <span className="filter-text">Filter</span>
            <i className="bi bi-grid-fill filter-icon"></i>
            <i className="bi bi-view-list filter-icon"></i>
            <span className="results-text text-dark">Showing 1-16 of 32 results</span>
          </div>

          {/* Right Part */}
          <div className="right-part d-flex align-items-center">
            <span className="show-text">Show</span>
            <input type="text" className="form-control number-input" defaultValue="16" />
            <span className="sort-by-text">Sort by:</span>
            <select className="form-control default-input" value={sortOption} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-5">
          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ShopPage;
