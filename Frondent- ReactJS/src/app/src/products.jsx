"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../style/products.css";

const Products = () => {
    const [dataProducts, setDataProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/39")
            .then((response) => response.json())
            .then((data) => {
                if (data.acf) {
                    const products = [
                        {
                            id: 1,
                            title: data.acf.produto1.title,
                            description: data.acf.produto1.description,
                            image: data.acf.produto1.productimage,
                        },
                        {
                            id: 2,
                            title: data.acf.produto2.title,
                            description: data.acf.produto2.description,
                            image: data.acf.produto2.productimage,
                        },
                        {
                            id: 3,
                            title: data.acf.produto3.title,
                            description: data.acf.produto3.description,
                            image: data.acf.produto3.productimage,
                        },
                        {
                            id: 4,
                            title: data.acf.produto4.title,
                            description: data.acf.produto4.description,
                            image: data.acf.produto4.productimage,
                        },
                    ];
                    setDataProducts({
                        title: data.acf.title,
                        subtitle: data.acf.subtitle,
                        products,
                    });
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
        <div className="products-container">
            <div className="title-box">
                <div className="title-product">{dataProducts.title}</div>
                <div className="subtitle">{dataProducts.subtitle}</div>
            </div>
            <div className="products">
                {dataProducts.products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
