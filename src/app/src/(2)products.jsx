import React from "react";
import "../style/products.css";

const Products = () => {
    return (
        <div className="products-container">
            <div className="title-box">
                <div className="title">
                    <div className="title-product">Lorem ipsum dolor sit amet consectetur</div>
                </div>
                <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo
                </div>
            </div>

            <div className="products">
                {/* Card 1 */}
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-frame">
                        <div className="card-frame-row">
                            <div className="card-text">Lorem ipsum dolor</div>
                        </div>
                        <div className="card-frame-row">
                            <div className="card-description">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-frame">
                        <div className="card-frame-row">
                            <div className="card-text">Lorem ipsum dolor</div>
                        </div>
                        <div className="card-frame-row">
                            <div className="card-description">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card">
                    <div className="card-image"></div>
                    <div className="card-frame">
                        <div className="card-frame-row">
                            <div className="card-text">Lorem ipsum dolor</div>
                        </div>
                        <div className="card-frame-row">
                            <div className="card-description">Lorem ipsum dolor sit amet consectetur.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
