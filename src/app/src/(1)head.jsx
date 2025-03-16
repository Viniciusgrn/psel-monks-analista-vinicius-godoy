"use client";
import React, { useState } from "react";
import "../style/header.css";

const Head = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="hero-lp">
            <div className="hero-content">
                <div className="header">
                    <div className="logo">.monks</div>
                    {/* Menu Desktop */}
                    <div className="menu desktop-menu">
                        <div className="menu-item">Categoria 1</div>
                        <div className="menu-item">Categoria 2</div>
                        <div className="menu-item">Categoria 3</div>
                    </div>
                    {/* Ícone do Menu Mobile */}
                    <div className="mobile-menu-icon" onClick={toggleMenu}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                </div>

                {/* Título e Texto */}
                <div className="text-header">
                    <h1>Lorem ipsum dolor sit amet consectetur</h1>
                    <p>
                        Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet
                        consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit
                        amet consectetur
                    </p>
                </div>

                {/* Menu Mobile (exibido apenas se aberto) */}
                {menuOpen && (
                    <div className="mobile-menu">
                        <div className="menu-item">Categoria 1</div>
                        <div className="menu-item">Categoria 2</div>
                        <div className="menu-item">Categoria 3</div>
                    </div>
                )}
            </div>

            <div className="hero-image">
                <img src="monks.png" alt="Hero" />
            </div>
        </div>
    );
};

export default Head;
