"use client";
import React, { useState, useEffect } from "react";
import "../style/forms.css";

const FormsBox = () => {
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://backend.local/wp-json/wp/v2/pages/47")
            .then((response) => response.json())
            .then((data) => {
                setFormData({
                    title: data.acf.title,
                    subtitle: data.acf.subtitle,
                    note: data.acf.note,
                    verification: data.acf.verification,
                    number1: data.acf.number1,
                    plus: data.acf.plus,
                    number2: data.acf.number2,
                    buttonText: data.acf.buttontext,
                    image: data.acf.image,
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
        <div className="forms-box">
            <div className="image-container">
                <img src={formData.image} alt="Imagem de destaque" className="banner-image"/>
            </div>
            <div className="form-container">
                <h2 className="form-title">{formData.title}</h2>
                <h4 className="form-subtitle">{formData.subtitle}</h4>
                <p className="form-note">*{formData.note}</p>
                <form className="form-content">
                    <div className="form-main">
                        <input type="text" placeholder="Categoria*" className="form-input"/>
                        <input type="text" placeholder="Categoria*" className="form-input"/>
                        <input type="text" placeholder="Categoria" className="form-input"/>
                        <input type="text" placeholder="Categoria" className="form-input"/>
                    </div>
                    <div className="form-verificacao">
                        <h3>{formData.verification}</h3>
                        <div className="verificacao-main">
                            <div className="numerosDeVerificacao">
                                <h3 className="number">{formData.number1}</h3>
                                <h3 className="plus">{formData.plus}</h3>
                                <h3 className="number">{formData.number2}</h3>
                            </div>
                            <h3 className="equal">=</h3>
                            <input type="text" placeholder="Resultado*" className="input-verificacao"/>
                        </div>
                    </div>
                    <button type="submit" className="form-button">
                        {formData.buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormsBox;