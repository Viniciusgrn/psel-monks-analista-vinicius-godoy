"use client";
import React, { useState, useEffect } from "react";
import "../style/header.css";

const Head = () => {
    const [data, setData] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/36")
            .then((response) => response.json())
            .then((page) => {
                setData(page.acf);
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
        <div className="hero-lp">
            <div className="hero-content">
                <div className="header">
                    <div className="logo">{data.logo}</div>
                    <div className="menu desktop-menu">
                        <div className="menu-item">{data.category1}</div>
                        <div className="menu-item">{data.category2}</div>
                        <div className="menu-item">{data.category3}</div>
                        <div className="menu-item">{data.category4}</div>
                    </div>
                    <div className="mobile-menu-icon" onClick={toggleMenu}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                </div>
                <div className="text-header">
                    <h1>{data.title}</h1>
                    <p>{data.subtitle}</p>
                </div>

                {menuOpen && (
                    <div className="mobile-menu">
                        <div className="menu-item">{data.category1}</div>
                        <div className="menu-item">{data.category2}</div>
                        <div className="menu-item">{data.category3}</div>
                        <div className="menu-item">{data.category4}</div>
                    </div>
                )}

            </div>
            <div className="hero-image">
                <img src={data.image} alt="Hero" />
            </div>
        </div>
    );
};

export default Head;