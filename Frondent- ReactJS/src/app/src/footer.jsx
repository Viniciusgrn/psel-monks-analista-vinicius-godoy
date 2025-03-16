"use client";
import React, { useState, useEffect } from "react";
import "../style/footer.css";

const Footer = () => {
    const [footerData, setFooterData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/49")
            .then((response) => response.json())
            .then((data) => {
                setFooterData({
                    title: data.acf.title,
                    categories: [
                        data.acf.category1,
                        data.acf.category2,
                        data.acf.category3,
                        data.acf.category4
                    ],
                    instagram: data.acf.instagram,
                    whatsapp: data.acf.whatsapp,
                    twitter: data.acf.twitter,
                    facebook: data.acf.facebook
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
        <div className="footer">
            <div className="social">
                <div className="group">
                    <a href="#">
                        <img src={footerData.instagram} alt="Instagram" />
                    </a>
                </div>
                <div className="group">
                    <a href="#">
                        <img src={footerData.whatsapp} alt="WhatsApp" />
                    </a>
                </div>
                <div className="group">
                    <a href="#">
                        <img src={footerData.twitter} alt="Twitter" />
                    </a>
                </div>
                <div className="group">
                    <a href="#">
                        <img src={footerData.facebook} alt="Facebook" />
                    </a>
                </div>
            </div>
            <div className="infos">
                <div className="title">{footerData.title}</div>
                <div className="categories">
                    {footerData.categories.map((cat, index) => (
                        <div key={index} className="category">{cat}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;