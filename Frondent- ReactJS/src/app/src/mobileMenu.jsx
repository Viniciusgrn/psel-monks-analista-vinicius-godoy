"use client";
import React from "react";
import "../style/mobileMenu.css";

const MobileMenu = ({ menuItems, onClose }) => {
    return (
        <div className="mobile-menu-overlay">
            <div className="mobile-menu-container">
                <button className="close-button" onClick={onClose}>×</button>
                {menuItems.map((item, index) => (
                    <div key={index} className="mobile-menu-item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileMenu;
