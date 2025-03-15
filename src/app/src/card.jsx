import React from 'react';
import '../style/card.css'; // Para estilização do Card

const Card = ({ image, text }) => {
    return (
        <div className="card">
            <img src={image} alt="Card" className="card-image" />
            <p className="card-text">{text}</p>
        </div>
    );
}

export default Card;
