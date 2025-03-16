"use client";
import React from "react";
import "../style/forms.css";

const FormsBox = () => {
    return (
        <div className="forms-box">
            <div className="image-container">
                <img
                    src="appSection/image5.png"
                    alt="Imagem de destaque"
                    className="banner-image"
                />
            </div>
            {/* Container do Formulário */}
            <div className="form-container">
                <h2 className="form-title">Lorem ipsum dolor sit amet consectetur</h2>
                <h4 className="form-subtitle">Lorem ipsum dolor sit amet consectetur</h4>
                <p className="form-note">*Lorem ipsum dolor sit amet consectetur</p>
                <form className="form-content">
                    <div className="form-main">
                        <input type="text" placeholder="Nome" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                        <input type="text" placeholder="Nome" className="form-input" />
                        <input type="email" placeholder="Email" className="form-input" />
                    </div>
                    <div className="form-verificacao">
                        <h3>Verificacao de seguranca</h3>
                        <div className="verificacao-main">
                            <div className="numerosDeVerificacao">
                                <h3 className="number">427</h3>
                                <h3 className="plus">+</h3>
                                <h3 className="number">628</h3>
                            </div>
                            <h3>=</h3>
                            <input type="text" placeholder="Resultado*" className="input-verificacao" />
                        </div>
                    </div>
                    <button type="submit" className="form-button">Lorem ipsum</button>
                </form>

            </div>

            {/* Container da Imagem */}

        </div>
    );
};

export default FormsBox;
