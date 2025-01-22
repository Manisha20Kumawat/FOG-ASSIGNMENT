import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Card.css";

const Card = ({ name, price, image, discount }) => (
  <div className="col-md-3 col-sm-6 mb-4">
    <div className="card product-card">
      <img src={image} className="card-img-top product-image" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="price-discount d-flex justify-content-between align-items-center">
          <p className="price-text mb-0">Rp {price}</p>
          {discount && <span className="badge bg-warning">{discount} Off</span>}
        </div>
      </div>
      <div className="overlay-content">Add to Cart</div>
      <div className="actions">
        <div>
          <i className="bi bi-share"></i>
          <span>Share</span>
        </div>
        <div>
          <i className="bi bi-arrow-left-right"></i>
          <span>Compare</span>
        </div>
        <div>
          <i className="bi bi-heart"></i>
          <span>Like</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
