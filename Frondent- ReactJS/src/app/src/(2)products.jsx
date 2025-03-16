import React from "react";
import Card from "./Card";
import "../style/products.css";

const productsData = [
    {
        id: 1,
        image: "/products/image(1).png",
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        id: 2,
        image: "/products/image(2).png",
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        id: 3,
        image: "/products/image(3).png",
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur."
    },
    {
        id: 4,
        image: "/products/image(4).png",
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet consectetur."
    }
];

const Products = () => {
    return (
        <div className="products-container">
            <div className="title-box">
                <div className="title-product">
                    Lorem ipsum dolor sit amet consectetur
                </div>
                <div className="subtitle">
                    Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
                    faucibus sit scelerisque quis commodo
                </div>
            </div>

            <div className="products">
                {productsData.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
