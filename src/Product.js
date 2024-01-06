import React from "react"
import "./Product.css"

function Product({ title, image, price, rating}) {
    return <div
        className= "product" >
        <div className="product_details">
            <p> {title}</p>
            <p className="product_price">
                <strong>{price}</strong>
            </p>

            <div className="product_rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>

        </div>
        <img src={image}
        />

        <button>buy now</button>
    </div>;
}

export default Product;