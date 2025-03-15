import React from 'react';
import '../style/scroll.css'; // Certifique-se de importar o arquivo CSS corretamente

const ScrollComponent = () => {
    return (
        <div className="scroll-indicator">
            <div className="scroll-text">Scroll</div>
            <div className="scroll-semi-circle">
                <div className="scroll-arrow"></div>
            </div>
        </div>
    );
}

export default ScrollComponent;
