import React from 'react';
import '../style/appSection.css'; // Certifique-se de que o CSS esteja em um arquivo separado

const AppSection = () => {
    return (
        <div className="app-section">
            <div className="info-box">
                <div className="title-box">
                    <div className="title">
                        <p className="lorem-text">
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                    <div className="subtitle">
                        <p className="lorem-subtext">
                            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra
                        </p>
                    </div>
                </div>
                <div className="buttons">
                    <div className="image" style={{ backgroundImage: 'url(image.png)' }}></div>
                    <div className="image" style={{ backgroundImage: 'url(image.png)' }}></div>
                </div>
            </div>
        </div>
    );
};

export default AppSection;
