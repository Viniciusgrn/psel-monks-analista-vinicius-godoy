"use client";
import React, { useState, useEffect } from "react";
import "../style/gallery.css";

const Gallery = () => {
    const [galleryData, setGalleryData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/11")
            .then((response) => response.json())
            .then((data) => {
                setGalleryData({
                    title: data.acf.title,
                    subtitle: data.acf.subtitle,
                    mainImage: data.acf.principalImage,
                    secondaryImages: [
                        data.acf.secondaryImage1,
                        data.acf.secondaryImage2
                    ]
                });
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
        <div className="gallery">
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