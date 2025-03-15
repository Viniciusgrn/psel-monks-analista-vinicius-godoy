import React from 'react';
import '../style/productsTwo.css';

const ProductComponent = () => {
    return (
        <div className="product-container">
            <div className="title">
                <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="product-items">
                <div className="product-item">
                    <div className="tag">
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="tag">
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="tag">
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <div className="tag">
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                {/* Adicione mais itens conforme necessário */}
            </div>
        </div>
    );
};

export default ProductComponent;
