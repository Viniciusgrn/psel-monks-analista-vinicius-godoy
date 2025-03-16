import React from "react";
import "../style/products.css";

const Card = ({ product }) => {
    return (
        <div className="cards">
            <img src={product.image} alt="Product" className="cards-image" />
            <div className="cards-frame">
                <div className="cards-text">{product.title}</div>
                <div className="cards-description">{product.description}</div>
            </div>
        </div>
    );
};

export default Card;
