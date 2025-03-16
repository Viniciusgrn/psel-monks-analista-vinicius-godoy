"use client";
import React, { useState, useEffect } from "react";
import "../style/appSection.css";

const AppSection = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/41")
            .then((response) => response.json())
            .then((page) => {
                setData({
                    title: page.acf.title,
                    subtitle: page.acf.subtitle,
                    google: page.acf.google,
                    apple: page.acf.apple
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
        <div className="app-section">
            <div className="app-section__info-box">
                <div className="app-section__title-box">
                    <div className="app-section__title">{data.title}</div>
                    <div className="app-section__subtitle">{data.subtitle}</div>
                </div>
                <div className="app-section__buttons">
                    <div
                        className="app-section__btn-image"
                        style={{ backgroundImage: `url(${data.apple})` }}
                    ></div>
                    <div
                        className="app-section__btn-image"
                        style={{ backgroundImage: `url(${data.apple})` }}
                    ></div>
                    <div className="app-section__download-logos">
                        <a href="#" className="app-section__download-link">
                            <img src={data.apple} alt="Download on the App Store" />
                        </a>
                        <a href="#" className="app-section__download-link">
                            <img src={data.google} alt="Get it on Google Play" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSection;