// SimpleGallery.js
import React from 'react';
import '../style/gallery.css'; // Para estilização

const SimpleGallery = () => {
    return (
        <div className="gallery">
            {/* Main content */}
            <div className="main-picture">
                {/* Title Box */}
                <div className="title-box">
                    <div className="title">
                        <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    </div>
                    <div className="subtitle">
                        <p>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo</p>
                    </div>
                </div>

                {/* Main Image */}
                <div className="image main-image" />
            </div>

            {/* Secondary Images */}
            <div className="secondary-pics">
                <div className="image secondary-image" />
                <div className="image secondary-image" />
            </div>
        </div>
    );
};

export default SimpleGallery;
