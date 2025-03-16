"use client";
import React, { useState, useEffect } from "react";
import "../style/cards.css";

const CardsSection = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/45")
            .then((response) => response.json())
            .then((data) => {
                if (data.acf) {
                    const { card1, card2, card3 } = data.acf;
                    const cards = [
                        { id: 1, title: card1.title, subtitle: card1.subtitle, button: card1.button },
                        { id: 2, title: card2.title, subtitle: card2.subtitle, button: card2.button },
                        { id: 3, title: card3.title, subtitle: card3.subtitle, button: card3.button },
                    ];
                    setCardsData(cards);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p></p>;
    if (error) return <p>Erro: {error.message}</p>;

    return (
        <div className="card-section">
            {cardsData.map((card) => (
                <div key={card.id} className="card">
                    <div className="copy-block">
                        <div className="title">
                            <p>{card.title}</p>
                        </div>
                        <div className="body">
                            <p>{card.subtitle}</p>
                        </div>
                        <div className="button">
                            <span>{card.button}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsSection;
