"use client";
import React from 'react';
import '../style/appSection.css';

const AppSection = () => {
    return (
        <div className="app-section">
            <div className="app-section__info-box">
                <div className="app-section__title-box">
                    <div className="app-section__title">
                        Lorem ipsum dolor sit amet consectetur
                    </div>
                    <div className="app-section__subtitle">
                        Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
                        faucibus sit scelerisque quis commodo aenean viverra
                    </div>
                </div>
                <div className="app-section__buttons">
                    <div
                        className="app-section__btn-image"
                        style={{ backgroundImage: 'url(/appSection/image 3.png)' }}
                    ></div>
                    <div
                        className="app-section__btn-image"
                        style={{ backgroundImage: 'url(/appSection/image 3.png)' }}
                    ></div>
                    <div className="app-section__download-logos">
                        <a href="#" className="app-section__download-link">
                            <img src="/appSection/image 3.png" alt="Download on the App Store" />
                        </a>
                        <a href="#" className="app-section__download-link">
                            <img src="/appSection/image 4.png" alt="Get it on Google Play" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSection;
