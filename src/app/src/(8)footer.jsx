import React from 'react';
import '../style/footer.css';  // Aponte para o arquivo CSS

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <div className="group">
                    <img src="image1.png" alt="Icon 1" />
                </div>
                <div className="group">
                    <img src="image2.png" alt="Icon 2" />
                </div>
                <div className="group">
                    <img src="image3.png" alt="Icon 3" />
                </div>
            </div>
            <div className="infos">
                <div className="title">Lorem ipsum dolor sit amet</div>
                <div className="categories">
                    <div className="category">Lorem ipsum</div>
                    <div className="category">Lorem ipsum</div>
                    <div className="category">Lorem ipsum</div>
                    <div className="category">Lorem ipsum</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
