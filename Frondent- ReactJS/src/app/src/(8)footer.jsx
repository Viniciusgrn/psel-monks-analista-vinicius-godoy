import React from 'react';
import '../style/footer.css';  // Aponte para o arquivo CSS

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <div className="group">
                    <img src="/footer/instagram.png" alt="Icon 1" />
                </div>
                <div className="group">
                    <img src="/footer/whatsapp.png" alt="Icon 2" />
                </div>
                <div className="group">
                    <img src="/footer/twitter.png" alt="Icon 3" />
                </div>
                <div className="group">
                    <img src="/footer/face.png" alt="Icon 4" />
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
