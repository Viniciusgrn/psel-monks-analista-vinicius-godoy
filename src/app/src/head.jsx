import React from 'react';
import '../style/header.css';

const Head = () => {
    return (
        <div className="hero-lp">
            {/* Seção da esquerda (logo, menu, título e texto) */}
            <div className="hero-content">
                <div className="header">
                    <div className="logo">Logo</div>
                    <div className="menu">
                        <div className="menu-item">Item 1</div>
                        <div className="menu-item">Item 2</div>
                        <div className="menu-item">Item 3</div>
                    </div>
                </div>

                {/* Título e texto abaixo do menu */}
                <div className="text-header">
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur</p>
                </div>

            </div>

            {/* Seção da imagem */}
            <div className="hero-image">
                <img src="monks.png" alt="Hero" />
            </div>
        </div>
    );
};

export default Head;
