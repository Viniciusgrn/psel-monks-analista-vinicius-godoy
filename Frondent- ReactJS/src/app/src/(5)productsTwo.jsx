import React from 'react';
import '../style/productsTwo.css';

const ProductComponent = () => {
    // Lista dos 15 produtos com os textos exatos fornecidos
    const products = [
        { id: 1, text: "perfumaria" },
        { id: 2, text: "corpo e banho" },
        { id: 3, text: "hidratante" },
        { id: 4, text: "desodorante" },
        { id: 5, text: "cabelos" },
        { id: 6, text: "maquiagem" },
        { id: 7, text: "rosto" },
        { id: 8, text: "casa" },
        { id: 9, text: "infantil" },
        { id: 10, text: "shampoo" },
        { id: 11, text: "sabonete" },
        { id: 12, text: "body splash" },
        { id: 13, text: "oleo corporal" },
        { id: 14, text: "corretivo" },
        { id: 15, text: "protecao solar" }
    ];

    return (
        <div className="product-container2">
            <div className="title2">
                <p> Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <div className="product-items2">
                {products.map((prod) => (
                    <div key={prod.id} className="product-item2">
                        <div className="tag2">
                            <div className="text2">
                                <p>{prod.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductComponent;
