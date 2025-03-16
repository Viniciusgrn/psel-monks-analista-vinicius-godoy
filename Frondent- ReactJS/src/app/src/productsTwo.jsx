"use client";
import React, { useState, useEffect } from "react";
import "../style/productsTwo.css";

const ProductComponent = () => {
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/43")
            .then((response) => response.json())
            .then((data) => {
                if (data.acf) {
                    const acf = data.acf;
                    setTitle(acf.title);
                    const prodArray = [];
                    for (let i = 1; i <= 15; i++) {
                        const field = acf[`product${i}`];
                        if (field) {
                            prodArray.push({ id: i, text: field });
                        }
                    }
                    setProducts(prodArray);
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
        <div className="product-container2">
            <div className="title2">
                <p>{title}</p>
            </div>
            <div className="product-items2">
                {products.map((prod) => (
                    <div key={prod.id} className="product-item2">
                        <div className="tag2">
                            <div className="text2">
                                <p>{prod.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductComponent;