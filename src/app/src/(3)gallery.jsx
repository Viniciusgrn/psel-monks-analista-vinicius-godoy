"use client";
import React, { useState, useEffect } from "react";
import "../style/gallery.css";

const Gallery = () => {
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulação de chamada à API (substitua pela URL da sua API)
    useEffect(() => {
        // Exemplo de dados retornados pela API:
        const data = {
            title: "Lorem ipsum dolor sit amet consectetur",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo",
            mainImage:"/gallery/image(5).png",
            secondaryImages: [
                "/gallery/image6.png",
                "/gallery/image7.png"
            ]
        };

        // Simula atraso na API
        setTimeout(() => {
            setGalleryData(data);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error.message}</p>;

    return (
        <div className="gallery">
            {/* Área principal */}
            <div className="main-picture">
                <div className="title-box">
                    <div className="title-gallery">
                        <h2>{galleryData.title}</h2>
                    </div>
                    <div className="subtitle">
                        <p>{galleryData.subtitle}</p>
                    </div>
                </div>
                <div className="main-image-container">
                    <img src={galleryData.mainImage} alt="Main" className="main-image" />
                </div>
            </div>

            {/* Área secundária */}
            <div className="secondary-pics">
                {galleryData.secondaryImages.map((img, index) => (
                    <div key={index} className="secondary-image-container">
                        <img src={img} alt={`Secondary ${index + 1}`} className="secondary-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
